import Nav from "../NavPage/Nav.jsx";
import Linear from "../LinearGradient/Linear.jsx";
import Main from "../MainPage/Main.jsx";
import Carousel from "../CarouselPart/Carousel.jsx";
import Card from "../NewCard/Card.jsx";
import Section from "../SectionPage/SectionPage.jsx";
import InputPage from "../InputPage/InputPage.jsx";
import FooterPage from "../FooterPage/FooterPage.jsx";

//UseEffect import from react js

import {useEffect} from "react";

//aos import from aos
import AOS from "aos";
import "aos/dist/aos.css"


const HomePage = () => {

    useEffect(() => {
        AOS.init({duration: "1000", delay: "1000"})
    }, [])


    return (
        <div>
            <div data-AOS="fade-right"><Nav/></div>
            <div data-AOS="fade-left"><Linear/></div>
            <div data-AOS="fade-up"><Main/></div>
            <div data-AOS="fade-up"><Carousel/></div>
            <div data-AOS="fade-up"><Card/></div>
            <div data-AOS="fade-up"><Section/></div>
            <div data-AOS="fade-right" style={{zIndex: 2, position: "relative"}}><InputPage/></div>
            <div data-AOS="fade-left" style={{zIndex: 1, position: "relative"}}><FooterPage/></div>
            {/*<p>Hey</p>*/}
        </div>
    )
}

export default HomePage
