import React, { useState, } from "react";
import { Container, Tabs, Tab, Row, Col, Accordion, Card, ProgressBar, ButtonGroup, ToggleButton,} from "react-bootstrap";
import EndedPolls from "../../components/Polls/endedPolls";
import ExecutivePolls from "../../components/Polls/executivePolls";
import ActivePolls from "../../components/Polls/activePolls";
import background from "../../assets/img/heroVisual.svg"
import connection from "../../assets/img/5394665-removebg-preview.png"
import CustomButton from "../../components/Button/Button.styles";




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
        <Container>
          <Row>
            <Col md={9}>
                <CustomButton style={{
                  background:"transparent",
                  color:"#276863",
                  border:"1px solid #276863",
                  marginLeft:"35px",
                }}>
                    Previous Poll
                </CustomButton>
                <CustomButton style={{
                  background:"transparent",
                  color:"#276863",
                  border:"1px solid #276863",
                  marginLeft:"20px",
                }}>
                    Next Poll
                </CustomButton>
                <Card style={{
                  padding:"40px",
                  margin:"40px",
                  border:"1px solid transparent",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                  background:"#ffffffaa",
                  
                }}>
                  <div style={{
                    display:"flex",
                  }}>
                    <p style={{
                      padding:"10px",
                      background:"#D2EEEC", borderRadius:"10px", color:"#434343",
                    }}>Created NOV 08 2021 16:00 UTC</p>
                    <p style={{
                      padding:"10px",
                      background:"#D2EEEC", borderRadius:"10px", color:"#434343",
                      display:"flex",
                      justifyContent:"flex-end",
                      float:"right",
                      position:"relative",
                      marginLeft:"25vw",
                    }}>0:43:50 REMAINING</p>
                  </div>
                  <div>
                    <h4>
                        Ratification Poll for Adding the Deco Fixed Rate Core Unit (DECO-001) - November 8, 2021
                    </h4>
                  </div>
                  <div>
                    <Tabs
                      id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-3"
                    >
                      <Tab eventKey="home" title="Details">
                        <div>
                          <div className="brief" style={{margin:"20px",}}>
                              <h5 style={{color:"maroon", }}>
                                Brief
                              </h5>
                              <p style={{color:"#666666"}}>The Governance Facilitators have placed a ratification poll into the voting system as part of the responsibilities defined in MIP51. This Governance Poll will be active for fourteen days beginning on Monday, November 8 at 16:00 UTC.</p>
                          </div>

                          <div className="rules" style={{margin:"20px",}}>
                            <h5 style={{color:"maroon",}}>
                              Rules
                            </h5>
                            <ul style={{color:"#666666", fontWeight:"bold",}}>
                              <li>You may vote for a single option.</li>
                              <li>You should vote for the option which you prefer.</li>
                            </ul>
                          </div>

                          <div className="brief" style={{margin:"20px",}}>
                              <h5 style={{color:"maroon", }}>
                                Review
                              </h5>
                              <p style={{color:"#666666"}}>The community may vote in this poll to express support or opposition to Adding the Deco Fixed Rate Core Unit (DECO-001) being accepted and implemented in the Maker Protocol.</p>

                              <p>MIP39c2-SP23
                              A brief summary of this proposal has been provided by the MIP Author and is shown below:</p>

                              <p>MIP39c2-SP23 establishes a Deco Fixed Rate Core Unit for the integration and maintenance of the Deco protocol facilitating Fixed Rate Vaults. The Deco Protocol operates to decouple Yield-Bearing Assets into Fixed Rate and Pure Yield instruments thus providing a hedge against rate volatility for all yield bearing assets.

                              Please review the links below to inform your position on this proposal before voting.</p>
                          </div>

                          <div className="vote">
                            <ButtonGroup>
                              {radios.map((radio, idx) => (
                                <ToggleButton
                                  key={idx}
                                  id={`radio-${idx}`}
                                  type="radio"
                                  variant={'outline-secondary'}
                                  name="radio"
                                  value={radio.value}
                                  checked={radioValue === radio.value}
                                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                                  style={{
                                    width:"150px",
                                    margin:"10px",
                                  }}
                                >
                                  {radio.name}
                                </ToggleButton>
                              ))}
                            </ButtonGroup>
                            <CustomButton style={{
                              marginLeft:"100px",
                              backgroundColor:"#276867",
                              padding:"10px",

                            }}>
                              Submit Vote
                            </CustomButton>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="active" title="Stats">
                        <h4 style={{
                            padding:"20px",
                            color:"maroon",
                            textDecoration:"underline",
                            
                        }}>Live Results</h4>
                      <div style={{
                        padding:"20px",
                        fontSize:"40px",
                        color:"#666666",
                        
                      }}>
                        Yes
                        <ProgressBar variant="success" animated now={67} />
                      </div>
                      <div style={{
                        padding:"20px",
                        fontSize:"40px",
                        color:"#666666",
                        
                      }}>
                        No
                        <ProgressBar variant="danger" animated now={32} />
                      </div>
                      </Tab>
                    </Tabs>
                  </div>
                </Card>
            </Col>

            <Col md={3}>
              <div className="FAQ">
                <h4>FAQs</h4>
              </div>
              <div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
           <img src={connection} alt="Header Blob"
              style={{
                width:"25%",
                transform: "rotate(60deg)",
                position:"absolute",
                bottom:"-45vw",
                left:"-10vw",
                opacity:"0.25"
              }}
            />
            <img src={connection} alt="Header Blob"
              style={{
                width:"25%",
                transform: "rotate(60deg)",
                position:"absolute",
                top:" -10vw",
                left:"-10vw",
                opacity:"0.25"
              }}
            />
            <img src={connection} alt="Header Blob"
              style={{
                width:"25%",
                transform: "rotate(60deg)",
                position:"absolute",
                top:" 30vw",
                right:"-10vw",
                opacity:"0.25"
              }}
            />
            <img src={connection} alt="Header Blob"
              style={{
                width:"25%",
                transform: "rotate(60deg)",
                position:"absolute",
                bottom:"-45vw",
                left:"-10vw",
                opacity:"0.25"
              }}
            />
        </div>
      </div>
    );
  }

export default VoteDetailsDashboard
  