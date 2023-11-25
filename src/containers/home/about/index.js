/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import Button from "@components/ui/button";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Tilt from "react-parallax-tilt";
import {
    SectionArea,
    LayerStyle,
    Thumb,
    AboutTextStyle,
    AboutContent,
    LlistIconStyle,
    ListLi,
    ListText,
    Area,
} from "./style";

const AboutArea = () => {
    const aboutSectonQery = useStaticQuery(graphql`
        query AboutSectonQuery {
            aboutJson {
                section_title {
                    subTitle
                    title
                }
                image1 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                image2 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                content1
            }
        }
    `);
    const {
        section_title: { title, subTitle },
        image1,
        image2,
        content1,
        content2,
        content3,
        listText1,
        listText2,
    } = aboutSectonQery.aboutJson;

    const imageOne = getImage(image1);
    const imageTwo = getImage(image2);

    return (
        <SectionArea>
            <Area>
                <Container>
                    <Row>
                        <Col lg={6} xl={6}>
                            <LayerStyle>
                                <Thumb>
                                    <Row className="m-0">
                                        <Col
                                            sm={12}
                                            md={12}
                                            lg={12}
                                            xl={12}
                                            className="tilt-animation"
                                        >
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
                                                    image={imageTwo}
                                                    className="img-two"
                                                    src=""
                                                    alt="Nurul-Yateem Foundation"
                                                />
                                            </Tilt>
                                        </Col>
                                    </Row>
                                </Thumb>
                            </LayerStyle>
                        </Col>
                        <Col lg={6} xl={6}>
                            <SectionTitle
                                sx={{ mb: "30px" }}
                                showImage={false}
                                title={title}
                                subTitle={subTitle}
                            />
                            <AboutContent>
                                <AboutTextStyle>{content1}</AboutTextStyle>
                                <Button
                                    path="/about-us"
                                    color="gradient"
                                    size="small"
                                    shape="rectangle"
                                >
                                    Learn More
                                </Button>
                            </AboutContent>
                        </Col>
                    </Row>
                </Container>
            </Area>
        </SectionArea>
    );
};

export default AboutArea;
