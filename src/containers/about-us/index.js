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

const AboutPageArea = () => {
    const aboutSectonQery = useStaticQuery(graphql`
        query AboutPageQuery {
            aboutMainJson {
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
                    mission {
                        id
                        VerientClassName
                        text1
                        text2
                        title
                    }
                }
                sectionTwo {
                    title1
                    subTitle1
                    content1_2
                    content2_2
                }
                sectionThree {
                    title2
                    box {
                        figure
                        content
                    }
                }
                sectionFour {
                    title3
                    content2_3
                }
            }
        }
    `);

    const {
        sectionOne: {
            title,
            subTitle,
            image1,
            content1,
            content2,
            content3,
            mission,
        },
        sectionTwo: { title1, subTitle1, content1_2, content2_2 },
        sectionThree: { title2, box },
        sectionFour: { title3, content2_3 },
    } = aboutSectonQery.aboutMainJson;

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
                                subTitle={subTitle}
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
                                <p className="mb-0">{content3}</p>
                            </AboutContent>
                            <ContentBoxWrp>
                                <Row>
                                    {mission.map((itemData) => {
                                        return (
                                            <Col
                                                lg={6}
                                                md={6}
                                                sm={6}
                                                key={itemData.id}
                                            >
                                                <MissionBox
                                                    title={itemData.title}
                                                    text1={itemData.text1}
                                                    text2={itemData.text2}
                                                    VerientClassName={
                                                        itemData.VerientClassName
                                                    }
                                                />
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </ContentBoxWrp>
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
                                            {content1}
                                        </AboutTextStyle>
                                        <Button path="#" color="gradient">
                                            Sponsor a Child
                                        </Button>
                                    </AboutContent>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Area>
            </SectionArea>
            <SectionArea className="text-md-center">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <SectionTitle
                                sx={{ mb: "30px" }}
                                showImage={false}
                                title={title2}
                                // subTitle={subTitle}
                            />
                        </Col>
                    </Row>
                    <Row>
                        {box.map((itemData) => {
                            return (
                                <Col lg={4} key={itemData.id}>
                                    <CausesItemWrap>
                                        <ContentBox>
                                            <ITitle>{itemData.figure}</ITitle>
                                            <p>{itemData.content}</p>
                                        </ContentBox>
                                    </CausesItemWrap>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </SectionArea>
            <SectionArea dark className="text-md-center">
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
                                    title={title3}
                                />
                                <AboutContent>
                                    <AboutTextStyle primary>
                                        {content2_3}
                                    </AboutTextStyle>
                                    <Button path="#" color="gradient">
                                        Read Our {new Date().getFullYear()}{" "}
                                        Financial Report
                                    </Button>
                                </AboutContent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </SectionArea>
            <TeamArea />
        </>
    );
};

export default AboutPageArea;
