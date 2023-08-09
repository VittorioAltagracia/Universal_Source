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
import { AccordionAndCardText } from "../utils/translations/hardCodedUITranslations";

const Question = ({ question }) => {
  const { source, id } = question;
  const { t, i18n } = useTranslation();

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
                  {AccordionAndCardText.docs[i18n.language]}:
                  {` ` + t(`${id}.key3`)}
                </CardFooter>
              ) : null}
            </Card>
            <span className="card-text-category-1">
              {AccordionAndCardText.category[i18n.language]}: {t(`${id}.key4`)}
            </span>
            <br />
            <span className="in-detail">
              {AccordionAndCardText.linkText1[i18n.language]}:
              <button className="link-button">
                {source.includes("https") ? (
                  <a
                    href={source}
                    target="_blank"
                    alt="leads to a source of information or describes it"
                  >
                    {AccordionAndCardText.linkText2[i18n.language]}
                  </a>
                ) : (
                  `${AccordionAndCardText.linkText3[i18n.language]}`
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
