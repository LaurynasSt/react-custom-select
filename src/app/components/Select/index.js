import React from "react";
import Option from "../Option";

import "./index.css";

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectText: "",
      showOptionList: false,
      optionsList: []
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({
      defaultSelectText: this.props.defaultText
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = e => {
    if (
      !e.target.classList.contains("custom-select-option") &&
      !e.target.classList.contains("selected-text")
    ) {
      this.setState({
        showOptionList: false
      });
    }
  };

  handleListDisplay = () => {
    this.setState(prevState => {
      return {
        showOptionList: !prevState.showOptionList
      };
    });
  };

  handleOptionClick = e => {
    this.setState({
      defaultSelectText: e.target.getAttribute("dataname"),
      showOptionList: false
    });
  };

  render() {
    const { optionsList } = this.props;
    const { showOptionList, defaultSelectText } = this.state;
    return (
      <div className="custom-select-container">
        <div
          className={showOptionList ? "selected-text active" : "selected-text"}
          onClick={this.handleListDisplay}
        >
          {defaultSelectText}
        </div>
        {showOptionList && (
          <div className="options">
            {optionsList.map(option => {
              return (
                <Option
                className="custom-select-option"
                dataname={option.name}
                value={option.id}
                onClick={this.handleOptionClick}
                >
                  {option.name}
                </Option>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Select;