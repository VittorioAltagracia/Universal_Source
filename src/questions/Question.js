import {
  Card,
  CardTitle,
  Accordion,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
} from "reactstrap";
import React, { useState } from "react";

const Question = ({ question }) => {
  const { name, answer } = question;

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
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">{name}</AccordionHeader>
          <AccordionBody accordionId="1">{answer}</AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
