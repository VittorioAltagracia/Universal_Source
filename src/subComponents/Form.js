import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";

const GeneralUseForm = () => {
  <Formik>
    <Form>
      <FormGroup row>
        <Label htmlFor="firstName">Your Name</Label>
        <Col>
          <Field
            placeholder="Enter your name"
            name="firstName"
            className="form-control"
          />
        </Col>
      </FormGroup>
    </Form>
  </Formik>;
};

export default GeneralUseForm;
