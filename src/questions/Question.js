import {
  Accordion,
  AccordionBody,
  AccordionItem,
  AccordionHeader,
  Card,
  CardBody,
  CardFooter,
  Button,
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
      <Accordion open={open} toggle={toggle} className="accordion my-5">
        <AccordionItem>
          <AccordionHeader targetId="1" className="accordion-header">
            <span className="acc-header">{t(`${id}.key1`)}</span>
          </AccordionHeader>
          <AccordionBody accordionId="1" className="card-color">
            <Card className="mb-3" style={{ border: "0px" }}>
              <CardBody className="p-3" style={{ backgroundColor: "#fff" }}>
                {t(`${id}.key2`)}
              </CardBody>
              {t(`${id}.key3`) ? (
                <CardFooter
                  className="p-3"
                  style={{ backgroundColor: "#fff", border: "0px" }}
                >
                  <p className="fixel-font">
                    {AccordionAndCardText.docs[i18n.language]}:
                  </p>
                  <p className="default-font mb-0">{` ` + t(`${id}.key3`)} </p>
                </CardFooter>
              ) : null}
            </Card>
            <span className="card-text-category-1 fixel-font">
              {AccordionAndCardText.category[i18n.language]}:{" "}
              <span className="default-font">{t(`${id}.key4`)}</span>
            </span>
            <p className="in-detail">
              {AccordionAndCardText.linkText1[i18n.language]}:
              {source.includes("https") ? (
                <>
                  <Button
                    style={{
                      padding: "0.3rem",
                      marginLeft: "0.3rem",
                      backgroundColor: "#768fab",
                      border: "0px",
                    }}
                  >
                    <a
                      href={source}
                      target="_blank"
                      alt="leads to a source of information or describes it"
                      style={{ color: "#fff" }}
                    >
                      {AccordionAndCardText.linkText2[i18n.language]}
                    </a>
                  </Button>
                </>
              ) : (
                <>
                  <span className="default-font">
                    {` ` + AccordionAndCardText.linkText3[i18n.language]}
                  </span>
                </>
              )}
            </p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Question;
