import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { switchLanguage } from "../utils/translations/translationSlice";
import { useTranslation } from "react-i18next";
import { TextForNavbar } from "../utils/translations/hardCodedUITranslations";

const LanguageSelectorDropdown = () => {
  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const updateLangOnClick = (selectedLang) => {
    dispatch(switchLanguage(selectedLang));

    i18n.changeLanguage(selectedLang);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Dropdown
        nav
        isOpen={dropdownOpen}
        toggle={toggle}
        className="language-selector"
      >
        <Button className="navbar-button">
          <DropdownToggle nav caret style={{ color: "#021740" }}>
            <i className="fa fa-lg fa-language" />
            <DropdownMenu>
              <DropdownItem
                onClick={() => updateLangOnClick("en")}
                className="dropdown-color"
              >
                {TextForNavbar.languageName1[i18n.language]}
              </DropdownItem>
              <DropdownItem
                onClick={() => updateLangOnClick("uk")}
                className="dropdown-color"
              >
                {TextForNavbar.languageName2[i18n.language]}
              </DropdownItem>
            </DropdownMenu>
          </DropdownToggle>
        </Button>
      </Dropdown>
    </>
  );
};

export default LanguageSelectorDropdown;
