import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class DropDownWithSelected extends Component {
  constructor() {
    super();
    this.state = {
      apps: ["app1", "app2", "app3", "app4", "app5", "app6"],
      dropDownItems: []
    };
  }
  handleSelection = selectedItemKey => {
    let dropDownItems = this.state.apps.map(app => false);
    dropDownItems[selectedItemKey] = true;
    this.setState({ dropDownItems });
  };

  render() {
    return (
      <div>
        <DropDownItem
          handleSelection={this.handleSelection}
          apps={this.state.apps}
          dropDownItems={this.state.dropDownItems}
        />
      </div>
    );
  }
}

const DropDownItem = props => {
  const items = props.apps.map(app => (
    <Dropdown.Item
      key={props.apps.indexOf(app)}
      eventKey={props.apps.indexOf(app)}
      active={props.dropDownItems[props.apps.indexOf(app)]}
      onSelect={props.handleSelection}
    >
      {app}
    </Dropdown.Item>
  ));
  return <DropdownButton title="Apps">{items}</DropdownButton>;
};

export default DropDownWithSelected;
