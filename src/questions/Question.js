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
import { TranslateViaAPI } from "./fetchTranslations";

const Question = ({ question }) => {
  const { name, answer, category, source, required_documents } = question;
  const { translated_answer } = question;
  const { uk, es } = translated_answer;
  const [translate, setTranslate] = useState(null);

  const translateIntoUkrainian = () => {
    setTranslate(translated_answer.uk);
  };
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
          <AccordionHeader targetId="1" className="accordion-header">
            <span className="acc-header">{name}</span>
          </AccordionHeader>
          <AccordionBody accordionId="1" className="card-color">
            {
              <button onClick={() => translateIntoUkrainian()}>
                Translate into Ukrainian
              </button>
            }
            <Card className="mb-3">
              <CardBody className="p-3">
                {translate === translated_answer.uk
                  ? translated_answer.uk
                  : answer}
              </CardBody>
              {required_documents ? (
                <CardFooter className="p-3">
                  Accepted/Required Documents:
                  {` ` + required_documents}
                </CardFooter>
              ) : null}
            </Card>
            <span className="card-text-category-1">Category: {category}</span>
            <br />
            <span className="in-detail">
              To read more in detail about this topic please visit the link if
              it's available:
              <button className="link-button">
                {source.includes("https") ? (
                  <a
                    href={source}
                    target="_blank"
                    alt="leads to a source of information or describes it"
                  >
                    Click here
                  </a>
                ) : (
                  `The link is unavailable or is not provided yet.`
                )}
              </button>
            </span>
            <button
              onClick={() =>
                TranslateViaAPI(category, name, required_documents)
              }
            >
              Translate
            </button>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
