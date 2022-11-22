import "./Catalogue.css";
import Untick from "../Images/untick-circle.png";
const Catalogue = () =>{
    return(
        <>
        <div className="catalogue">
            <div className="cat">
                <img src={Untick} alt="" />
                <p>Internship Description</p>
            </div>
            <div className="cat-1">
                <img src={Untick} alt="" />
                <p>Internship Guide</p>
            </div>
            <div className="cat-2">
                <img src={Untick} alt="" />
                <p>Surveys</p>
            </div>
            <div className="cat-3">
                <img src={Untick} alt="" />
                <p>Settings</p>
            </div>
        </div>
        </>
    );
}

export default Catalogue;