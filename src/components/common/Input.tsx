import 'assets/scss/common/input.scss';
import { FC } from 'react';
import { Form } from 'react-bootstrap';

interface IInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    controlId?: string;
};

const Input: FC<IInputProps> = ({ label, type = 'text', placeholder, controlId }) => {
    return (
        <Form.Group className="input-wrapper" controlId={controlId}>
            <Form.Label className="an-18 regular-text">{label}</Form.Label>
            <Form.Control className="an-20 regular-text lh-24" type={type} placeholder={placeholder || label} />
        </Form.Group>
    );
};

export default Input;
