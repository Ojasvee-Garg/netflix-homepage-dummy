import { useState, useEffect } from "react";
import "./Nav.css"

export const Nav = () => {

    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])


    //only render the nav__black when show is true
    return (
        <div className={`nav ${show && "nav__bar"}`}> 
            <div className="nav__contents">
                <img
                    className="nav__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix logo"
                />

                <img
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Netflix avatar"
                />

            </div>

        </div>
    )
}