import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Category } from "../utils/category";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  CategorySelectorText,
  TranslatedCategories,
} from "../utils/translations/hardCodedUITranslations";

const CategorySelector = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const toggle = () => setCategoryOpen(!categoryOpen);

  const [selected, setSelected] = useState("");

  const onDropdownClick = (catName) => {
    setSelected(catName);
  };

  const { i18n } = useTranslation();

  return (
    <>
      <Dropdown isOpen={categoryOpen} toggle={toggle} direction="end">
        <DropdownToggle nav caret>
          <i className="fa fa-indent" />
          {` `}
          {CategorySelectorText.catSelector[i18n.language]}
        </DropdownToggle>
        <DropdownMenu>
          {Category.map((cat) => {
            return (
              <DropdownItem key={cat.id}>
                <NavLink
                  to={`/dynamic/${cat.name}/${cat.id}`}
                  onClick={() => onDropdownClick(cat.name, cat.id)}
                  className="dropdown-item"
                >
                  {cat.name}
                  {/* {TranslatedCategories[i18n.language]} */}
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
