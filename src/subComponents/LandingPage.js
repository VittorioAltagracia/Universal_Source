import React, { useState, useEffect } from "react";
import supabase from "../utils/Supabase";
import LoadingSpinner from "../subComponents/LoadingSpinner";
import { Container, Row, Col } from "reactstrap";

const LandingPage = () => {
  const [about, setAbout] = useState([]);
  const [Loading, setLoading] = useState(true);

  const updated_at = new Date("Jul 11, 23").toLocaleDateString("en-US");

  useEffect(function () {
    async function loadAbout() {
      const { data: TextData } = await supabase.from("About").select("*");
      setAbout(TextData);
      setLoading(false);
    }
    loadAbout();
  }, []);

  if (Loading) return <LoadingSpinner />;

  return (
    <Container fluid className="mt-0">
      <Row className="align-items-start">
        <Col md="3">
          <h2>
            New in the US? Find quick answers to the most important questions.
          </h2>
          <p className="mt-4"></p>
        </Col>
      </Row>
      <Row>
        <div>
          {about.map((info) => (
            <div key={info.id}>
              <Container>
                <Row className="my-5">
                  <Col md="auto">
                    <p>{info.about}</p>
                  </Col>
                  <Col>
                    <p>Added by: {info.added_by}</p>
                    <p>Updated at: {updated_at}</p>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default LandingPage;
