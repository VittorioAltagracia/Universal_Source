import { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Navbar,
  Collapse,
  NavbarToggler,
  Row,
  Col,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import SecondDropdown from "../subComponents/SecondDropdown";

import { useSelector } from "react-redux";
import { selectAllQuestions } from "../questions/questionsSlice";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import ErrorToast from "../subComponents/ErrorToast";

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [navOpen, setNavOpen] = useState(false);

  const questions = useSelector(selectAllQuestions);
  const isLoading = useSelector((state) => state.questions.isLoading);
  const errorMes = useSelector((state) => state.questions.errorMes);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMes) {
    return (
      <Row>
        <Col sm="4">
          <ErrorToast errorMes={errorMes} />
        </Col>
      </Row>
    );
  }

  const Proof = (category) => {
    const filterByCategory = questions.filter(
      (question) => question.category === category
    );
    return filterByCategory;
  };

  // return (
  //   <>
  //     <Col className="mt-4">
  //       This page will display all the questions and answers that are stored in
  //       the database.
  //     </Col>
  //     <Row className="ms-auto">
  //       {questions.map((question) => (
  //         <Col md="3" className="m-5" key={question.id}>
  //           <Question question={question} />
  //         </Col>
  //       ))}
  //     </Row>
  //     {Proof("Documents").map((category) => (
  //       <Col key={category}>{category.answer}</Col>
  //     ))}
  //   </>
  // );

  return (
    <>
      <Navbar sticky="top" expand="md" dark className="mt-3 py-0 nav-bar">
        <h3 className="header-float">Universal Source </h3>

        <NavbarToggler onClick={() => setNavOpen(!navOpen)} />
        <Collapse isOpen={navOpen} navbar>
          <Nav className="ms-auto change">
            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/questions" className="nav-link">
                Load all answers
              </NavLink>
            </NavItem>
            {/* first dropdown is below */}
            <NavItem>
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                  Answers by Category
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Select your category</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Education</DropdownItem>
                  <DropdownItem divider />
                  <NavLink className="nav-link" to="/answers">
                    <DropdownItem>All answers together</DropdownItem>
                  </NavLink>
                  <DropdownItem divider />
                  <DropdownItem>How to apply for documents?</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Job Search</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Driving and getting a car</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              {/* independent dropdown for languages is below */}
              <SecondDropdown />
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
