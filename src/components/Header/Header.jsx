import "./Header.css";
import ArrowLeft from "../Images/arrow-left.png"
import ArrowRight from "../Images/arrow-right.png";
const Header = () => {
    
        return (
        <>
        <div className="Header">
            <div className="back">
                <img src={ArrowLeft} alt="" />
                <p>Back</p>
            </div>
                <div className="intern"><h1>Add New Internship</h1></div>
            <div className="next-step">
                <div className="next">
                    <p>Continue to Next Step</p>
                    <img src={ArrowRight} alt="" />
                </div>
            </div>
        </div>
        </>
        );
    
}

export default Header;