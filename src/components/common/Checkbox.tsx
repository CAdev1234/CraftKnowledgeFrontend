import { FC, ReactNode } from 'react';
import { Form } from 'react-bootstrap';
import 'assets/scss/common/checkbox.scss';

interface ICheckboxProps {
    label: string | ReactNode;
    controlId?: string;
};

const Checkbox: FC<ICheckboxProps> = ({ label, controlId }) => {
    return (
        <Form.Group className="checkbox-wrapper" controlId={controlId}>
            <Form.Check type="checkbox" label={label} />
        </Form.Group>
    );
};

export default Checkbox;
