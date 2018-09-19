import React from 'react';

// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
// Dropdown, DropdownItem, DropdownToggle, DropdownMenu, 
//TODOD SET Active = true based on view state
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.changeView = this.changeView.bind(this);
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

  changeView(view){
    this.props.updateView(view);
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" onClick={() => this.changeView("home")}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled>Communities:</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.changeView("Gratitude")}>Gratitude</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.changeView("Health/Fitness")}>Health/Fitness</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.changeView("Education")}>Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.changeView("Empowerment")}>Empowerment</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}