import React from "react";
import Select from "./components/Select";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      defaultSelectText: "Please select an option",
      optionsList: [
        { id: 1, name: "Option1" },
        { id: 2, name: "Option2" },
        { id: 3, name: "Option3" },
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="test">
          <Select
            defaultText={this.state.defaultSelectText}
            optionsList={this.state.optionsList}
          />
        </div>
      </div>
    );
  }
}
 export default App;