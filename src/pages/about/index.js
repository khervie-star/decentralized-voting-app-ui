import React from "react";
import {  } from "react-bootstrap";
import styled from "styled-components";
import NavBar from "../../components/Navbar";
import AboutBody from "../../sections/AboutBody";
import AboutHeader from "../../sections/AboutHeader";
import FooterSection from "../../sections/footerSection";

function About(params) {
    return (
        <div id="about" style={{
            backgroundColor:"#fafafa",
        }}>
            <NavBar />
            <AboutHeader />
            <FooterSection />
        </div>
    )
}

export default About