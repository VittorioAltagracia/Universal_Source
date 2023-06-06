import { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Navbar,
  Collapse,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import SecondDropdown from "../subComponents/SecondDropdown";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Navbar sticky="top" expand="md" dark className="mt-3 py-0 nav-bar">
        <h3 className="header-float">Universal Source </h3>

        <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
        <Collapse isOpen={navOpen} navbar>
          <Nav className="ms-auto change">
            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/questions" className="nav-link">
                Load all answers
              </NavLink>
            </NavItem>
            {/* first dropdown is below */}
            <NavItem>
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                  Answers by Category
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Select your category</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Education</DropdownItem>
                  <DropdownItem divider />
                  <NavLink className="nav-link" to="/answers">
                    <DropdownItem>All answers together</DropdownItem>
                  </NavLink>
                  <DropdownItem divider />
                  <DropdownItem>How to apply for documents?</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Job Search</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Driving and getting a car</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              {/* independent dropdown for languages is below */}
              <SecondDropdown />
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
