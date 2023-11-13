import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { TextForNavbar } from "../utils/translations/hardCodedUITranslations";

const ContactCreatorDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [handleDirection, setHandleDirection] = useState(
    window.innerWidth <= 600
  );

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const { i18n } = useTranslation();

  return (
    <>
      <Dropdown
        nav
        isOpen={dropdownOpen}
        toggle={toggle}
        direction={handleDirection ? "down" : "end"}
      >
        <DropdownToggle nav caret className="dropdown-color">
          <i className="fa fa-commenting" aria-hidden="true" />
          {` `}
          {TextForNavbar.navbar6[i18n.language]}
        </DropdownToggle>
        <DropdownMenu className="no-pad">
          {/*  */}
          <DropdownItem>
            <NavLink to={"/requests"} className="dropdown-item dropdown-color">
              <i className="fa fa-pencil-square-o" />
              {` `}
              {TextForNavbar.navbar2[i18n.language]}
            </NavLink>
          </DropdownItem>
          {/*  */}
          <DropdownItem divider />
          <DropdownItem>
            <NavLink to={"/about"} className="dropdown-item dropdown-color">
              <i className="fa fa-user-circle" />
              {` `}
              {TextForNavbar.navbar3[i18n.language]}
            </NavLink>
          </DropdownItem>
          {/*  */}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default ContactCreatorDropdown;
