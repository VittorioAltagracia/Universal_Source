import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const SecondDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle1 = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle1}>
        <DropdownToggle nav caret>
          Languages
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem disabled>English 🌎</DropdownItem>
          <DropdownItem>Ukrainian 🔷 (coming soon) </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default SecondDropdown;
