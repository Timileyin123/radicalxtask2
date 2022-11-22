import {useState} from "react";
import "./Menu.css"
import DropDown from "../Images/arrow-dropdown.png"
import MenuToggle from "../Images/menu.png"
import Square from "../Images/add-square (1).png";
import SearchBtn from "../Images/search-normal.png";
import CloseBtn from "../Images/close.png";
import CircleBtn from "../Images/tick-circle.png";
const Menu = () =>{

    const [buttonValue, setButtonValue] = useState(false);
    const [descValue, setDescValue] = useState(false);

    const mainCat = (
        <div className="category">
                        <p className="cat-heading">Category</p>
                        <div className="cat-body">
                            <input type="search" placeholder="Search Category" />
                            <img src={SearchBtn} alt="" />
                            <div className="cat-tags">
                                <div className="tag">
                                    <p>Technology</p>
                                    <img src={CloseBtn} alt="" /></div>
                                <div className="tag">
                                    <p>Development</p>
                                    <img src={CloseBtn} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
    )
    const mainDesc = (
            <div className="category">
                        <p className="cat-heading">Description</p>
                        
                        <textarea placeholder="Description"></textarea>
                    </div>
    )
    const Category = () =>{
        setButtonValue(!setButtonValue)
    }

        return (
            <>
            <div className="menus">
                <div className="menus-container">
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module" onClick={() => setButtonValue(true)}>
                            <button>Category</button>
                            <img src={DropDown} alt="" />
                        </div>
                </div>
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module" onClick={() => setDescValue(true)}>
                            <button>Description</button>
                            <img src={DropDown} alt="" />
                        </div>
                </div>
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module">
                            <button>Location</button>
                            <img src={DropDown} alt="" />
                        </div>
                </div>
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module">
                            <button>Benefits</button>
                            <img src={DropDown} alt="" />
                        </div>
                </div>
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module">
                            <button>Intro Video</button>
                            <img src={DropDown} alt="" />
                        </div>
                </div>
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module">
                            <button>Mentor Details</button>
                            <img src={DropDown} alt="" />
                        </div>
                </div>
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module">
                            <button>Recommended Roles</button>
                            <img src={DropDown} alt="" />
                        </div>
                </div> 
                <div className="menu">
                        <div className="menu-toggle">
                            <img src={MenuToggle} alt="" />
                        </div>
                        <div className="module">
                            <button>Web Links & Resources</button>
                            <img src={DropDown} alt="" />
                        </div>
                </div>
                <div className="assessment">
                        <div className="add">
                            <img src={Square} alt="" />
                            <p>Add More</p>
                        </div>
                    </div>
                </div>
                <div className="MenuCat-2">
                    { buttonValue ? mainCat : " "
                        // (() =>{
                        //     if (buttonValue=== true){
                        //         return(mainCat)
                        //     }
                        //     else{
                        //         return(" ")
                        //     }
                            
                        // })() 

                        }

                        {descValue ? mainDesc : " "}
                    
                </div> 
            </div>
            </>
        );
    
}

export default Menu;