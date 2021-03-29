import { createContext, useContext, useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Select onOptionChange={(value) => console.log(value)}>
        <Option value={1}>Option 1 </Option>
        <Option value={2}>Option 2 </Option>
      </Select>
    </div>
  );
}

const SelectContext = createContext()

const Select = ({ children, onOptionChange }) => {
  //initializing state
  const [selectedOption, setSelectedOption] = useState(0);
  //memoizing callback inside ref object to avoid useEffect dependency
  const cbRef = useRef(onOptionChange);
  //calling outside callback to pass data about selected option
  useEffect(() => {
    if (selectedOption) {
      cbRef.current(selectedOption);
    }
  }, [selectedOption])
  //defining selector function
  const selectOption = (option) => setSelectedOption(option)
  return (
    <SelectContext.Provider value={selectOption}>
      {children}
      <p>Selected option is : {selectedOption}</p>
    </SelectContext.Provider>
  )
}

const useSelectOption = () => {
  //extracting useContext call into declarative custom hook
  const ctx = useContext(SelectContext);
  if (!ctx) {
    throw new Error("useSelectOption may only be used within SelectContextProvider")
  }
  return ctx
}

const Option = ({ children, value }) => {
  const selectOption = useSelectOption()
  return (
    <button onClick={() => selectOption(value)}>{children}</button>
  )
}

export default App;