import Banner from "../../Components/Banner/Banner";
import Choose from "../../Components/Choose/Choose";
import Events from "../../Components/Events/Events";
import Services from "../../Components/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Choose></Choose>
            <Events></Events>
        </div>
    );
};

export default Home;