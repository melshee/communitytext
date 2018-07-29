import React from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

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
            <NavLink href="#" onClick={() => this.changeView("gratitude")}>Gratitude</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.changeView("health")}>Health/Fitness</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.changeView("education")}>Education</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => this.changeView("empowerment")}>Empowerment</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}