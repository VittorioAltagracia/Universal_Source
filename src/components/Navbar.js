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
import LanguageSelectorDropdown from "../subComponents/LanguageSelector";
import CategorySelector from "../subComponents/CategorySelector";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Navbar sticky="top" expand="md" dark className="mb-5 mt-3 py-0 nav-bar ">
        <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
        <Collapse isOpen={navOpen} navbar>
          <Nav className="change justify-content-center align-items-center">
            <NavItem>
              <NavLink to="/" className="nav-link p-0 mx-4">
                <h4 className="header-app-name">Universal Source (BETA)</h4>
              </NavLink>
            </NavItem>

            {/* first dropdown is below */}
            <NavItem>
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle} role="menu">
                <DropdownToggle nav caret>
                  <i className="fa fa-list fa-lg" />
                </DropdownToggle>
                <DropdownMenu>
                  <NavLink to="/questions" className="nav-link">
                    Load all answers
                  </NavLink>
                  <DropdownItem divider />
                  {/* category enddown (aka dropdown to the right) */}
                  <CategorySelector />
                  <DropdownItem divider />
                  {/* independent dropdown (aka dropdown to the right) for languages is below */}
                  <LanguageSelectorDropdown />
                  <DropdownItem divider />
                  <NavLink to="/about" className="nav-link">
                    About Creator
                  </NavLink>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
