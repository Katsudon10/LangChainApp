import Header from "../block/Header";
import Footer from "../block/Footer";
import Question from "../modules/Question";
import History from "../modules/History";

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <Question />
                <History />
            </div>
            <Footer />
        </div>
    );
};

export default Home;