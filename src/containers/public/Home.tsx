import Hemlet from 'react-helmet';
import HomeVideoSection from 'components/Home/HomeVideoSection';
import ServiceSection from 'components/Home/ServiceSection';
import CoursesSection from 'components/Home/CoursesSection';
import TrainingSection from 'components/Home/TrainingSection';
import TabSection from 'components/Home/TabSection';


const Home = () => {
    return (
        <div className="home-wrapper">
            <Hemlet>
                <title>Home | Craft Knowledge</title>
            </Hemlet>
            <HomeVideoSection />
            <ServiceSection />
            <CoursesSection />
            <TrainingSection />
            <TabSection />
        </div>
    );
};

export default Home;
