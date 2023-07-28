import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Category } from "../utils/category";
import { NavLink } from "react-router-dom";

const CategorySelector = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const toggle = () => setCategoryOpen(!categoryOpen);

  const [selected, setSelected] = useState("");

  const onDropdownClick = (catName) => {
    setSelected(catName);
  };

  return (
    <>
      <Dropdown isOpen={categoryOpen} toggle={toggle} direction="end">
        <DropdownToggle nav caret>
          Answers by Categories
        </DropdownToggle>
        <DropdownMenu>
          {Category.map((cat) => {
            return (
              <DropdownItem key={cat.id}>
                <NavLink
                  to={`/dynamic/${cat.name}`}
                  onClick={() => onDropdownClick(cat.name)}
                  className="dropdown-item"
                >
                  {cat.name}
                </NavLink>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default CategorySelector;
