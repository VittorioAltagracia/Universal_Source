import { useEffect, useState } from "react";
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
  Button,
} from "reactstrap";
import LanguageSelectorDropdown from "../subComponents/LanguageSelector";
import CategorySelector from "../subComponents/CategorySelector";
import { NavLink, useLocation } from "react-router-dom";
import { TextForNavbar } from "../utils/translations/hardCodedUITranslations";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  // i18n.language is a property that holds the current language code accessable via i18next library
  return (
    <>
      <Navbar sticky="top" dark expand="sm" className="p-0 nav-bar">
        <div className="flex">
          <NavLink to="/" className="nav-link p-0 mr-2">
            <h4 className="header-app-name" style={{ marginBottom: "0px" }}>
              <strong>U</strong>niversal
              <strong>S</strong>ource
            </h4>
          </NavLink>
          <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <Collapse isOpen={menuOpen} navbar horizontal={false}>
          <Nav className=" justify-content-start align-items-center">
            <NavItem>
              <Dropdown
                nav
                isOpen={dropdownOpen}
                toggle={toggle}
                role="menu"
                className="main-dropdown"
              >
                <Button className="navbar-button">
                  <DropdownToggle nav caret style={{ color: "#021740" }}>
                    <i className="fa fa-list fa-lg" />
                  </DropdownToggle>
                </Button>
                <DropdownMenu className="dropdown-menu-opacity">
                  <NavLink to="/questions" className="nav-link dropdown-color">
                    <i className="fa fa-globe" />{" "}
                    {TextForNavbar.navbar1[i18n.language]}
                  </NavLink>
                  <DropdownItem divider />
                  {/* category enddown (aka dropdown to the right) */}
                  <CategorySelector />
                  <DropdownItem divider />
                  {/* independent dropdown (aka dropdown to the right) for languages is below */}
                  <NavLink to="/requests" className="nav-link dropdown-color">
                    <i className="fa fa-pencil-square-o" />
                    {` `}
                    {TextForNavbar.navbar2[i18n.language]}
                  </NavLink>
                  <DropdownItem divider />
                  <NavLink
                    to="/enhancements"
                    className="nav-link dropdown-color new-label"
                  >
                    <i className="fa fa-cog" />
                    {` `}
                    {TextForNavbar.navbar4[i18n.language]}
                  </NavLink>
                  <DropdownItem divider />
                  <NavLink to="/about" className="nav-link dropdown-color">
                    <i className="fa fa-user-circle" />
                    {` `}
                    {TextForNavbar.navbar3[i18n.language]}
                  </NavLink>
                  <DropdownItem divider />
                  <NavLink
                    to="/release_notes"
                    className="nav-link dropdown-color new-label"
                  >
                    <i className="fa fa-sticky-note" />
                    {` `}
                    {TextForNavbar.navbar5[i18n.language]}
                  </NavLink>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <LanguageSelectorDropdown />
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
