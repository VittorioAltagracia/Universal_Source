import {
  Accordion,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
  Card,
  CardBody,
} from "reactstrap";
import React, { useState } from "react";

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
      <Accordion open={open} toggle={toggle} className="accordion">
        <AccordionItem>
          <AccordionHeader targetId="1">
            <span className="acc-header">{name} </span>
          </AccordionHeader>
          <AccordionBody accordionId="1" className="card-color">
            <Card className="mb-3">
              <CardBody>{answer}</CardBody>
            </Card>
            <span className="card-category">Category: </span>
            <span className="card-text-category">{category}</span>
            <br />
            <span className="card-source">Source: </span>
            <span>
              <a href={source} target="_blank">
                Link
              </a>
            </span>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
