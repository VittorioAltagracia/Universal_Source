import {
  Accordion,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
  Card,
  CardBody,
  CardFooter,
} from "reactstrap";
import React, { useState } from "react";

const Question = ({ question }) => {
  const { name, answer, category, source, required_documents } = question;

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
              {required_documents ? (
                <CardFooter>
                  Accepted/Required Documents:
                  {
                    <ul>
                      <li>{required_documents}</li>
                    </ul>
                  }
                </CardFooter>
              ) : null}
            </Card>
            <span className="card-category">Category: </span>
            <span className="card-text-category">{category}</span>
            <br />
            <span className="card-source">Source: </span>
            <span>
              <button className="link-button">
                {source.includes("https") ? (
                  <a href={source} target="_blank">
                    Click here
                  </a>
                ) : source ? (
                  <p>{source}</p>
                ) : (
                  `The link is unavailable or there is no source yet.`
                )}
              </button>
            </span>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
