import { minusIcon, plusIcon } from 'helper/constants';
import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion'

export interface IAccordionData {
    title: string;
    body: string;
}

interface IQuestionAnswerProps {
    list: Array<IAccordionData>
}

const QuestionAnswer: FC<IQuestionAnswerProps> = ({ list }) => {
    return (
        <Accordion className="question-answer-wrapper">
            {
                list.map((data, index) => (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                        <Accordion.Header>
                            <div className="flex-x flex-1 space-between">
                                <div>{data.title}</div>
                                <img src={plusIcon} className="plus-icon" alt="plus" />
                                <img src={minusIcon} className="minus-icon" alt="minus" />
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            {data.body}
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    );
};

export default QuestionAnswer;

