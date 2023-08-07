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
import { useTranslation } from "react-i18next";

const Question = ({ question }) => {
  const { source, id } = question;
  const { t } = useTranslation();
  console.log("Translated Name:", t("key1", { id: question.id }));
  console.log("Translated Answer:", t("key2", { id: question.id }));
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
            <span className="acc-header">{t(`${id}.key1`)}</span>
          </AccordionHeader>
          <AccordionBody accordionId="1" className="card-color">
            <Card className="mb-3">
              <CardBody className="p-3">{t(`${id}.key2`)}</CardBody>
              {t(`${id}.key3`) ? (
                <CardFooter className="p-3">
                  Accepted/Required Documents:
                  {` ` + t(`${id}.key3`)}
                </CardFooter>
              ) : null}
            </Card>
            <span className="card-text-category-1">
              Category: {t(`${id}.key4`)}
            </span>
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
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
