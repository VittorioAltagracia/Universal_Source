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
import SecondDropdown from "../subComponents/SecondDropdown";
import { Category } from "../utils/category";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const [navOpen, setNavOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const onDropdownClick = (catName) => {
    setSelected(catName);
  };

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
                  {Category.map((cat) => {
                    return (
                      <DropdownItem key={cat.id}>
                        <NavLink
                          to={`/dynamic/${cat.name}`}
                          onClick={() => onDropdownClick(cat.name)}
                          className="dropdown-item"
                        >
                          {cat.name}
                        </NavLink>
                      </DropdownItem>
                    );
                  })}
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink className="dropdown-item" to="/answers">
                      All answers together
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              {/* independent dropdown for languages is below */}
              <SecondDropdown />
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">
                About Creator
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
