import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
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
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle} direction="end">
        <DropdownToggle nav caret className="dropdown-color">
          <i className="fa fa-language" />{" "}
          {TextForNavbar.languageSelector[i18n.language]}
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
      </Dropdown>
    </>
  );
};

export default LanguageSelectorDropdown;
