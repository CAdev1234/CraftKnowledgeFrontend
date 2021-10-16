import { helpImg } from 'helper/constants';
import 'assets/scss/public/help.scss';
import QuestionAnswer, { IAccordionData } from 'components/Help/QuestionAnswer';
import Hemlet from 'react-helmet';

const QuestionAnswerList: Array<IAccordionData> = [
    {
        title: "How to register?",
        body: "You can register online, or you can visit our physical office locate at 10801 Lockwood Dr STE 330, Silver Spring, MD 20901"
    },
    {
        title: "When does course starts?",
        body: "You can register online, or you can visit our physical office locate at 10801 Lockwood Dr STE 330, Silver Spring, MD 20901"
    },
    {
        title: "How to process payment?",
        body: "You can register online, or you can visit our physical office locate at 10801 Lockwood Dr STE 330, Silver Spring, MD 20901"
    },
    {
        title: "What are our course offerings?",
        body: "You can register online, or you can visit our physical office locate at 10801 Lockwood Dr STE 330, Silver Spring, MD 20901"
    },
    {
        title: "What are our course offerings?",
        body: "You can register online, or you can visit our physical office locate at 10801 Lockwood Dr STE 330, Silver Spring, MD 20901"
    },
    {
        title: "What time is course provided?",
        body: "You can register online, or you can visit our physical office locate at 10801 Lockwood Dr STE 330, Silver Spring, MD 20901"
    },
    {
        title: "Can I setup payment plan for registration fee?",
        body: "You can register online, or you can visit our physical office locate at 10801 Lockwood Dr STE 330, Silver Spring, MD 20901"
    },
]

const Help = () => {

    return (
        <div className="help-wrapper">
            <Hemlet>
                <title>Help | Craft Knowledge</title>
            </Hemlet>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="title-text">
                            We’re here to help
                        </div>
                        <div className="subtitle-text">
                            Find clear <span className="cursor-pointer">FAQs</span> online and customer service available at the end of the phone seven days a week.
                        </div>
                        <img src={helpImg} alt="helpImg" className="help-image" />
                    </div>
                    <div className="col-lg-6 col-md-12 question-answer">
                        <QuestionAnswer list={QuestionAnswerList} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
