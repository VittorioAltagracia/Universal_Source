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
import DynamicPage from "../pages/DynamicPage";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const [navOpen, setNavOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const onDropdownClick = (catName) => {
    setSelected(catName);
    console.log(catName);
  };

  //  could create an object or an array of objects to hold categories
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
                  <DropdownItem>Select your category</DropdownItem>
                  <DropdownItem divider />

                  {Category.map((cat) => {
                    return (
                      <NavLink
                        key={cat.id}
                        to={`/dynamic/${cat.name}`}
                        onClick={() => onDropdownClick(cat.name)}
                      >
                        {cat.name}
                        <DropdownItem divider />
                      </NavLink>
                    );
                  })}

                  <NavLink className="nav-link" to="/answers">
                    <DropdownItem>All answers together</DropdownItem>
                  </NavLink>
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
