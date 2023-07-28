import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const LanguageSelectorDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle} direction="end">
        <DropdownToggle nav caret>
          Languages
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem disabled>English 🌎</DropdownItem>
          <DropdownItem>Ukrainian 🔷 </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default LanguageSelectorDropdown;
