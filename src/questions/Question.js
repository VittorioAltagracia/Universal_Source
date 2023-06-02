import {
  Accordion,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Question = ({ question }) => {
  const { name, answer, category, source } = question;

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
          <AccordionBody accordionId="1">
            <Card>
              <CardBody>{answer}</CardBody>
            </Card>
            Category: {category}
            <br />
            Source: {source}
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
