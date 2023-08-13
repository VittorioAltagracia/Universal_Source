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

  const updateLangOnClick = (selectedLang, i18n) => {
    dispatch(switchLanguage(selectedLang));

    i18n.changeLanguage(selectedLang);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle} direction="end">
        <DropdownToggle nav caret>
          <i className="fa fa-language" />
          {` `}
          {TextForNavbar.languageSelector[i18n.language]}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => updateLangOnClick("en", i18n)}>
            {TextForNavbar.languageName1[i18n.language]}
            🌎
          </DropdownItem>
          <DropdownItem onClick={() => updateLangOnClick("uk", i18n)}>
            {TextForNavbar.languageName2[i18n.language]}
            🔷{" "}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default LanguageSelectorDropdown;
