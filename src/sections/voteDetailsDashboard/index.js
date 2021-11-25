import React, { useState, } from "react";
import { Container, Tabs, Tab, Row, Col, Accordion, Card, ProgressBar, ButtonGroup, ToggleButton,} from "react-bootstrap";
import background from "../../assets/img/heroVisual.svg"
import connection from "../../assets/img/5394665-removebg-preview.png"
import CustomButton from "../../components/Button/Button.styles";
import NavBar from "../../components/Navbar";
import FooterSection from "../../sections/footerSection";
import VoteDashboard from "../../sections/voteDashboard";



function VoteDetailsDashboard() {
  const [key, setKey] = useState('home');
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Yes', value: '1' },
    { name: 'No', value: '2' },
    { name: 'Defer', value: '3' },
  ];

    return (
      <div style={{
        // backgroundImage: `url(${background})`,
      }}>
            <NavBar style={{backgroundColor:"#1F2933",}}/>
            <VoteDashboard />
            <FooterSection />
      </div>
    );
  }

export default VoteDetailsDashboard
