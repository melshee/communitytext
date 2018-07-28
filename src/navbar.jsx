import React, { Component } from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.changeView.
    this.state = {
      dropdownOpen: false,
      view: "menu"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  // changeView() {

  // }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Communities
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Gratitude</DropdownItem>
              <DropdownItem header>Health/Fitness</DropdownItem>
              <DropdownItem header>Education</DropdownItem>
              <DropdownItem header>Empowerment</DropdownItem>   
              {/*<DropdownItem divider />*/}
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Profile</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}