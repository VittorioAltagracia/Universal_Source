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
  // const [disabled, setDisabled] = useState(false);

  // const toggleDisabled = () => {
  //   if (i18n.language === "uk") setDisabled(true);
  //   else if (i18n.language === "en") {
  //     setDisabled(false);
  //   }
  // };

  return (
    <>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle} direction="end">
        <DropdownToggle nav caret>
          <i className="fa fa-language" />
          {` `}
          {TextForNavbar.languageSelector[i18n.language]}
          <DropdownMenu>
            <DropdownItem onClick={() => updateLangOnClick("en")}>
              {TextForNavbar.languageName1[i18n.language]}
              🌎{" "}
            </DropdownItem>
            <DropdownItem onClick={() => updateLangOnClick("uk")}>
              {TextForNavbar.languageName2[i18n.language]}
              🔷{" "}
            </DropdownItem>
          </DropdownMenu>
        </DropdownToggle>
      </Dropdown>
    </>
  );
};

export default LanguageSelectorDropdown;
