import { FC } from "react";
import { Form } from "react-bootstrap";
import "assets/scss/common/input.scss";

interface IInputProps {
  label: string;
  placeholder?: string;
  controlId?: string;
}

const Textarea: FC<IInputProps> = ({ label, placeholder, controlId }) => {
  return (
    <Form.Group className="input-wrapper" controlId={controlId}>
      <Form.Label className="an-18 regular-text">{label}</Form.Label>
      <Form.Control
        className="an-20 regular-text lh-24"
        as="textarea"
        rows={3}
        placeholder={placeholder || label}
      />
    </Form.Group>
  );
};

export default Textarea;
