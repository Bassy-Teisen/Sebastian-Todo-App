import { useEffect, useState } from "react";
import { BiArrowFromBottom } from 'react-icons/bi'
import "../App.css"

// ScrollToTop is displayed once page offset reaches above 300
const ScrollToTop = () => {
    
    const [isVisable, setIsVisable ] = useState(false)
    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisable(true)
        } else {
            setIsVisable(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    // UseEffect prevents infanit loop and removes eventlistener when necessary
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
    
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    return (
        // This is the button and it uses className for CSS position etc
        <div className="toTop">
            <button className={isVisable ? "opOn" : "opOff" } type="button" onClick={scrollToTop} ><BiArrowFromBottom /></button>
        </div>
    )
}

export default ScrollToTop