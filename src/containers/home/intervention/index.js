/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { graphql, useStaticQuery } from "gatsby";
import Button from "@components/ui/button";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Tilt from "react-parallax-tilt";
import {
    SectionArea,
    LlistIconStyle,
    ListLi,
    ListText,
    ImpactContent,
    ImpactTextStyle,
} from "./style";

const ImpactArea = () => {
    const InterventionData = useStaticQuery(graphql`
        query InterventionQuery {
            interventionJson {
                section_title {
                    title
                    subTitle
                }
                image {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                content1
                content2
            }
        }
    `);
    const {
        section_title: { title, subTitle },
        image,
        content1,
        content2,
    } = InterventionData.interventionJson;

    const imageOne = getImage(image);

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={12} xxl={12}>
                        <div className="content">
                            <SectionTitle
                                titleStyle
                                sx={{
                                    mb: [
                                        "30px",
                                        "50px",
                                        "80px",
                                        "100px",
                                        "100px",
                                    ],
                                }}
                                title={title}
                                subTitle={subTitle}
                                showImage={false}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xxl={6}>
                        <div className="content">
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
                        </div>
                    </Col>
                    <Col lg={6} xxl={5}>
                        <div className="content">
                            <ImpactContent>
                                <ImpactTextStyle>{content1}</ImpactTextStyle>
                            </ImpactContent>
                        </div>
                        <div className="content mt-5">
                            <ImpactContent>
                                <ImpactTextStyle>{content2}</ImpactTextStyle>
                            </ImpactContent>
                        </div>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default ImpactArea;
