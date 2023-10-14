import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Category } from "../utils/category";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CategorySelectorText } from "../utils/translations/hardCodedUITranslations";

const CategorySelector = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const toggle = () => setCategoryOpen(!categoryOpen);

  const [selected, setSelected] = useState("");
  const [handleDirection, setHandleDirection] = useState(
    window.innerWidth <= 600
  );

  useEffect(() => {
    const handleResize = () => {
      setHandleDirection(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onDropdownClick = (catName) => {
    setSelected(catName);
  };

  const { i18n } = useTranslation();

  return (
    <>
      <Dropdown
        isOpen={categoryOpen}
        toggle={toggle}
        direction={handleDirection ? "down" : "end"}
      >
        <DropdownToggle nav caret className="dropdown-color">
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
                  className="dropdown-item dropdown-color"
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
