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
import { fetchAnswers } from "../answers/fetchAnswers";
import AnswersList from "../answers/AnswersList";

const NavigationBar = ({ props }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* <div className="header"></div> */}
      <Navbar sticky="top" expand="md" dark className="mt-3 py-0 nav-bar">
        <h3>Universal Source </h3>

        <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
        <Collapse isOpen={navOpen} navbar>
          <Nav className="ms-auto change">
            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
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
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem divider />
                  <NavLink className="nav-link" to="/answers">
                    <DropdownItem>
                      <AnswersList
                        onClick={fetchAnswers}
                        props={fetchAnswers}
                      />
                    </DropdownItem>
                  </NavLink>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            {/* independent dropdown for languages is below */}
            <NavItem>
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
