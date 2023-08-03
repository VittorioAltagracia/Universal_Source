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

const LanguageSelectorDropdown = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const updateLangOnClick = (selectedLang) => {
    dispatch(switchLanguage(selectedLang));
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle} direction="end">
        <DropdownToggle nav caret>
          <i className="fa fa-language" />
          {` `}Languages
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => updateLangOnClick("en")}>
            English 🌎
          </DropdownItem>
          <DropdownItem onClick={() => updateLangOnClick("uk")}>
            Ukrainian 🔷{" "}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default LanguageSelectorDropdown;
