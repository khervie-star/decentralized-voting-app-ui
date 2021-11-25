import { React } from "react";
import NavBar from "../../components/Navbar";
import HeroSection from "../../sections/heroSection";
import SectionOne from "../../sections/sectionOne";
import SectionThree from "../../sections/sectionThree";
import SectionTwo from "../../sections/sectionTwo";
import FooterSection from "../../sections/footerSection";
import background from "../../assets/img/heroVisual.svg";
import Headers from "../../sections/header";
import ScrollReveal from 'scrollreveal'
import SectionFour from "../../sections/sectionFour";




function LandingPage(params) {
    return (
        <div>
            <div>
                <Headers />
                <SectionTwo />
                <SectionOne />
                <SectionThree />
                <SectionFour />
                <FooterSection />
            </div>
        </div>
    )    
}

export default LandingPage