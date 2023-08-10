import { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Navbar,
} from "reactstrap";
import LanguageSelectorDropdown from "../subComponents/LanguageSelector";
import CategorySelector from "../subComponents/CategorySelector";
import { NavLink } from "react-router-dom";
import { TextForNavbar } from "../utils/translations/hardCodedUITranslations";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const { i18n } = useTranslation();

  // i18n.language is a property that holds the current language code accessable via i18next library
  return (
    <>
      <Navbar sticky="top" expand="md" dark className="mb-5 mt-3 py-0 nav-bar">
        <Nav className="change justify-content-center align-items-center mx-3">
          <div className="d-flex flex-row-reverse flex-md-row align-items-center w-md-auto">
            <NavItem>
              <NavLink to="/" className="nav-link p-0 mx-4">
                <div className="d-flex align-items-center test">
                  <i className="fa fa-university fa-lg " />
                  <h4 className="header-app-name">Universal Source</h4>
                </div>
              </NavLink>
            </NavItem>

            <NavItem>
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle} role="menu">
                <DropdownToggle nav caret>
                  <i className="fa fa-list fa-lg" />
                </DropdownToggle>
                <DropdownMenu>
                  <NavLink to="/questions" className="nav-link">
                    <i className="fa fa-globe" />{" "}
                    {TextForNavbar.navbar1[i18n.language]}
                  </NavLink>
                  <DropdownItem divider />
                  {/* category enddown (aka dropdown to the right) */}
                  <CategorySelector />
                  <DropdownItem divider />
                  {/* independent dropdown (aka dropdown to the right) for languages is below */}
                  <LanguageSelectorDropdown />
                  <DropdownItem divider />
                  <NavLink to="/about" className="nav-link">
                    <i className="fa fa-user-circle" />
                    {` `}
                    {TextForNavbar.navbar2[i18n.language]}
                  </NavLink>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </div>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
