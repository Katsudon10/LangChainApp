import Header from "./Header";
import Footer from "./Footer";
import Question from "./Question";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header className=""/>
            <div className="flex-grow">
                <Question />
            </div>
            <Footer className="bg-gray-200 py-4"/>
        </div>
    );
};

export default Home;