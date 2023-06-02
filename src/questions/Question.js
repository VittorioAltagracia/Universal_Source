import {
  Accordion,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
} from "reactstrap";
import React, { useState } from "react";
import { selectAllAnswers } from "../answers/answersSlice";
import { useSelector } from "react-redux";
import { useRef } from "react";

const Question = ({ question }) => {
  const { name } = question;
  // const { description } = answer;

  const answers = useSelector(selectAllAnswers);
  function Acc() {
    {
      answers.map((answer) => <p key={answer.id} answer={answer} />);
    }
  }
  const $it = useRef(Acc());

  const [open, setOpen] = useState(false);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion
        open={open}
        toggle={toggle}
        onClick={() => console.log("peter")}
      >
        <AccordionItem>
          <AccordionHeader targetId="1">{name}</AccordionHeader>
          <AccordionBody accordionId="1">{$it.current}</AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
