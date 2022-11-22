import Menu from "../Menu/Menu";
import Catalogue from "../Catalogue/Catalogue";
import Header from "../Header/Header";
import "./Home.css";
const Home = () => {
    
        return (
            <>
            <div className="Home">
                <Header />
                <Catalogue />
                <Menu />
            </div>
            </>
        );
    
}

export default Home;