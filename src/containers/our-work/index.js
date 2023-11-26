/* eslint-disable prettier/prettier */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { Link, graphql, useStaticQuery } from "gatsby";
import Button from "@components/ui/button";
import MissionBox from "@components/mission";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tilt from "react-parallax-tilt";
import {
    SectionArea,
    LayerStyle,
    Thumb,
    AboutTextStyle,
    AboutContent,
    ContentBoxWrp,
    Area,
    CausesItemWrap,
    ContentBox,
    ITitle,
} from "./style";
import TeamArea from "../team";

const OurWorkPageArea = () => {
    const ourWorkSectonQery = useStaticQuery(graphql`
        query OurWorkPageQuery {
            ourWorkMainJson {
                id
                sectionOne {
                    title
                    subTitle
                    content1
                    content2
                    image1 {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                sectionTwo {
                    title1
                    subTitle1
                    content1_1
                    content1_2
                }
                sectionThree {
                    title2
                    subTitle2
                    content2_1
                    content2_2
                }
                sectionFour {
                    title3
                    subTitle3
                    content3_1
                    content3_2
                }
                sectionFive {
                    title4
                    subTitle4
                    content4_1
                    content4_2
                }
            }
        }
    `);

    const {
        sectionOne: { title, subTitle, image1, content1, content2 },
        sectionTwo: { title1, subTitle1, content1_1, content1_2 },
        sectionThree: { title2, subTitle2, content2_1, content2_2 },
        sectionFour: { title3, subTitle3, content3_1, content3_2 },
        sectionFive: { title4, subTitle4, content4_1, content4_2 },
    } = ourWorkSectonQery.ourWorkMainJson;

    const imageOne = getImage(image1);
    const imageTwo = getImage(image1);

    return (
        <>
            <SectionArea>
                <Container>
                    <Row>
                        <Col lg={9}>
                            <SectionTitle
                                sx={{ mb: "30px" }}
                                showImage={false}
                                title={title}
                                // subTitle={subTitle}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} xl={4}>
                            <LayerStyle>
                                <Thumb>
                                    <Tilt
                                        className=" js-tilt"
                                        scale={1.04}
                                        tiltReverse={true}
                                        tiltMaxAngleX={15}
                                        tiltMaxAngleY={15}
                                        perspective={3000}
                                        transitionSpeed={4000}
                                    >
                                        <GatsbyImage
                                            image={imageOne}
                                            className="img-one"
                                            alt="Nurul-Yateem Foundation"
                                        />
                                    </Tilt>
                                </Thumb>
                            </LayerStyle>
                        </Col>
                        <Col lg={8} xl={8}>
                            <AboutContent>
                                <AboutTextStyle>{content1}</AboutTextStyle>
                                <p>{content2}</p>
                            </AboutContent>
                        </Col>
                    </Row>
                </Container>
            </SectionArea>
            <SectionArea>
                <Area>
                    <Container>
                        <Row>
                            <Col lg={9}>
                                <SectionTitle
                                    sx={{ mb: "30px" }}
                                    showImage={false}
                                    title={title1}
                                    // subTitle={subTitle}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={9} xl={10}>
                                <div
                                    className="content"
                                    style={{ marginBottom: "25px" }}
                                >
                                    <AboutContent>
                                        <AboutTextStyle primary>
                                            {content1_1}
                                        </AboutTextStyle>
                                        <Button
                                            path="/our-work/child-sponsorship"
                                            color="gradient"
                                        >
                                            Learn More...
                                        </Button>
                                    </AboutContent>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Area>
            </SectionArea>
            <SectionArea dark className="text-md-end">
                <Container>
                    <Row>
                        <Col lg={12} xxl={12}>
                            <div
                                className="content"
                                style={{ marginBottom: "25px" }}
                            >
                                <SectionTitle
                                    textWhate
                                    titleStyle
                                    sx={{
                                        mb: ["35px"],
                                    }}
                                    title={title2}
                                />
                                <AboutContent>
                                    <AboutTextStyle primary>
                                        {content2_1}
                                    </AboutTextStyle>
                                    <Button
                                        path="/our-work/fostering"
                                        color="gradient"
                                    >
                                        Read More...
                                    </Button>
                                </AboutContent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </SectionArea>
            <SectionArea>
                <Area>
                    <Container>
                        <Row>
                            <Col lg={9}>
                                <SectionTitle
                                    sx={{ mb: "30px" }}
                                    showImage={false}
                                    title={title3}
                                    // subTitle={subTitle}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={9} xl={10}>
                                <div
                                    className="content"
                                    style={{ marginBottom: "25px" }}
                                >
                                    <AboutContent>
                                        <AboutTextStyle primary>
                                            {content3_1}
                                        </AboutTextStyle>
                                        <Button
                                            path="/our-work/healthcare-assistance"
                                            color="gradient"
                                        >
                                            Learn More...
                                        </Button>
                                    </AboutContent>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Area>
            </SectionArea>
            <SectionArea dark className="text-md-end">
                <Container>
                    <Row>
                        <Col lg={12} xxl={12}>
                            <div
                                className="content"
                                style={{ marginBottom: "25px" }}
                            >
                                <SectionTitle
                                    textWhate
                                    titleStyle
                                    sx={{
                                        mb: ["35px"],
                                    }}
                                    title={title4}
                                />
                                <AboutContent>
                                    <AboutTextStyle primary>
                                        {content4_1}
                                    </AboutTextStyle>
                                    <Button
                                        path="/our-work/counselling-and-support"
                                        color="gradient"
                                    >
                                        Read More...
                                    </Button>
                                </AboutContent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </SectionArea>
        </>
    );
};

export default OurWorkPageArea;
