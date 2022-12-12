import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [cc, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [areAllFieldsFilled, setAreAllFieldsFilled] = useState(true);

  const [showNameValidation, setShowNameValidation] = useState(false);
  const [showEmailValidation, setShowEmailValidation] = useState(false);
  const [showSubjectValidation, setShowSubjectValidation] = useState(false);
  const [showBodyValidation, setShowBodyValidation] = useState(false);

  // Getting the value or name of input triggering change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    name === "name"
      ? setName(value)
      : name === "cc"
      ? setEmail(value)
      : name === "subject"
      ? setSubject(value)
      : setBody(value);

    return name;
  };

  // If all fields are populated then enable the submit button
  useEffect(() => {
    setAreAllFieldsFilled(
      name.trim() !== "" && cc.trim() !== "" && subject.trim() !== "" && body.trim() !== ""
    );
  }, [name, cc, subject, body]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    launchEmailPlatform();
    resetForm();
  };

  // Open preferred email provide and proppulate
  const launchEmailPlatform = () => {
    window.open(
      `mailto:callasteven@gmail.com?name=${name}&cc=${cc}&subject=${subject}&body=${body}`
    );
    return false;
  };

  // Reset form fields with blank entries
  const resetForm = () => {
    setName("");
    setSubject("");
    setEmail("");
    setBody("");
  };

  // If user clicks off an input field without entering text, then validation message "is required" displays
  const handleBlurChange = (e) => {
    const { name, value } = e.target;

    name === "name" && value.trim() === "" ? setShowNameValidation (true) : setShowNameValidation(false);
    name === "cc" && value.trim() === "" ? setShowEmailValidation (true) : setShowEmailValidation(false);
    name === "subject" && value.trim() === "" ? setShowSubjectValidation (true) : setShowSubjectValidation(false);
    name === "body" && value.trim() === "" ? setShowBodyValidation (true) : setShowBodyValidation(false); 
  };

  return (
    <Form
      className="p-3 overflow-auto custom-about"
      onSubmit={handleFormSubmit}
    >
      <h1 className="display-4 custom-text">Contact me</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className="form-label">
          <Form.Label>Name</Form.Label>
          <Form.Label className={`validation-color ${showNameValidation ? "show": "hide"}`}>* field is required</Form.Label>
        </div>
        <Form.Control
          className="custom-border"
          type="text"
          placeholder="Enter Name"
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlurChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className="form-label">
          <Form.Label>Email address</Form.Label>
          <Form.Label className={`validation-color ${showEmailValidation ? "show": "hide"}`}>* field is required</Form.Label>
        </div>
        <Form.Control
          className="custom-border"
          type="email"
          placeholder="Enter email"
          value={cc}
          name="cc"
          onChange={handleInputChange}
          onBlur={handleBlurChange}
          required
        />
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <div className="form-label">
          <Form.Label>Subject</Form.Label>
          <Form.Label className={`validation-color ${showSubjectValidation ? "show": "hide"}`}>* field is required</Form.Label>
        </div>
        <Form.Control
          className="custom-border"
          type="text"
          placeholder="Enter subject"
          value={subject}
          name="subject"
          onChange={handleInputChange}
          onBlur={handleBlurChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <div className="form-label">
          <Form.Label>Message</Form.Label>
          <Form.Label className={`validation-color ${showBodyValidation ? "show": "hide"}`}>* field is required</Form.Label>
        </div>
        {/* <Form.Label>Message</Form.Label> */}
        <Form.Control
          className="custom-border"
          as="textarea"
          rows={2}
          type="textarea"
          placeholder="Enter your message"
          value={body}
          name="body"
          onChange={handleInputChange}
          onBlur={handleBlurChange}
          required
        />
      </Form.Group>

      <Button
        className="button-custom"
        variant="primary"
        type="submit"
        disabled={!areAllFieldsFilled}
        title="Enter all fields to send email"
      >
        Email Steve
      </Button>
    </Form>
  );
}

export default Contact;
