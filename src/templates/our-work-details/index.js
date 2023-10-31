/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import MissionBox from "@components/mission";
import Button from "@components/ui/button";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import BlogSidebar from "@containers/blog/blog-sideber";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    ServicesDetailsArea,
    ServicesDetailsContent,
    ServicesDetails,
    Thumb,
    ServicesTitle,
    DocumentItem,
    DocumentItemTitle,
    SectionArea,
    ImpactContent,
    ImpactTextStyle,
    AboutContent,
    AboutTextStyle,
    Area,
    LayerStyle,
    ContentBoxWrp,
    ImageArea,
} from "./style";
import SectionTitle from "../../components/title";
import Tilt from "react-parallax-tilt";
import SponsorsArea from "../../containers/home/sponsors";

const missionData = [
    {
        id: "mission",
        VerientClassName: "bg-color1",
        title: "Mission",
        text1: "At Nurul-Yateem, our mission is to provide unwavering support and care to the underprivileged, nurturing and empowering young lives with hope, knowledge, and resilience. We embody values of compassion, integrity, and a collective belief in every child's potential. Explore our journey, where kindness and generosity shape a brighter world.",
        text2: "",
    },
    {
        id: "vission",
        VerientClassName: "bg-color2",
        title: "Vision",
        text1: "We envision a world where every child's potential is nurtured, hope and knowledge empower them to overcome adversity, and acts of kindness and generosity shape a brighter future. We stand united in our mission to serve the underprivileged, embodying compassion, integrity, and an unwavering commitment to creating a better world, one smile at a time.",
        text2: "",
    },
    {
        id: "ambission",
        VerientClassName: "bg-color2",
        title: "Ambition",
        text1: "We envision a world where every child's potential is nurtured, hope and knowledge empower them to overcome adversity, and acts of kindness and generosity shape a brighter future. We stand united in our mission to serve the underprivileged, embodying compassion, integrity, and an unwavering commitment to creating a better world, one smile at a time.",
        text2: "",
    },
];

const OurWorkPage = ({ data, location, pageContext }) => {
    const parts = location.pathname.split("/");
    const pgName = parts[parts.length - 2];
    const decodedPageName = decodeURIComponent(pgName.replace(/-/g, " "));
    const pageName = decodedPageName.replace(/\b\w/g, (match) =>
        match.toUpperCase()
    );

    const ourWorkData = data.ourWorkJson;

    const image = getImage(ourWorkData.image.childImageSharp);

    return (
        <Layout>
            <SEO title={"Our Work"} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title={pageName}
            />
            <SectionArea center>
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
                                    title="Proident duis pariatur officia laboris amet laborum."
                                    subTitle="Amet cupidatat deserunt quis incididunt."
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
                                        image={image}
                                        className="img-one"
                                        alt="Nurul-Yateem Foundation"
                                    />
                                </Tilt>
                            </div>
                        </Col>
                        <Col lg={6} xxl={6}>
                            <div className="content">
                                <ImpactContent>
                                    <ImpactTextStyle>
                                        Lorem dolor duis do aliqua est eiusmod.
                                        Cillum id eiusmod non do culpa proident
                                        labore in aliqua sint ullamco excepteur.
                                        Consequat labore ullamco sint minim
                                        dolor nisi do exercitation cillum. Amet
                                        laboris minim consequat velit pariatur
                                        magna exercitation voluptate nisi irure
                                        commodo.
                                    </ImpactTextStyle>
                                </ImpactContent>
                            </div>
                        </Col>
                    </Row>
                    <ContentBoxWrp>
                        <Row>
                            {missionData.map((itemData) => {
                                return (
                                    <Col lg={4} md={4} sm={4} key={itemData.id}>
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
                </Container>
            </SectionArea>
            <SectionArea>
                <Area>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <SectionTitle
                                    sx={{ mb: "30px" }}
                                    showImage={false}
                                    title="Consectetur dolor laboris fugiat tempor ex exercitation exercitation ex."
                                    // subTitle={subTitle}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} xl={12}>
                                <div
                                    className="content"
                                    style={{ marginBottom: "25px" }}
                                >
                                    <AboutContent>
                                        <AboutTextStyle primary>
                                            Ullamco cupidatat esse dolore esse
                                            cupidatat quis aute mollit officia
                                            est irure. In consequat laborum nisi
                                            ex consectetur ea deserunt et
                                            eiusmod consequat. Pariatur
                                            excepteur irure velit ut mollit elit
                                            cupidatat incididunt voluptate
                                            aliqua culpa pariatur. Nulla
                                            reprehenderit eu commodo aute
                                            reprehenderit exercitation et.
                                        </AboutTextStyle>
                                        <Button path="#" color="gradient">
                                            Meet The Kids{" "}
                                        </Button>
                                    </AboutContent>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Area>
            </SectionArea>
            <SectionArea center>
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
                                    title="Proident duis pariatur officia laboris amet laborum."
                                    subTitle="Amet cupidatat deserunt quis incididunt."
                                />
                                <Button path="#" color="gradient">
                                    Sponsor a Child{" "}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </SectionArea>
            <SectionArea className="text-md-start">
                <Area>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <SectionTitle
                                    sx={{ mb: "30px" }}
                                    showImage={false}
                                    title="Consectetur dolor laboris fugiat tempor ex exercitation exercitation ex."
                                    // subTitle={subTitle}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} xl={12}>
                                <div
                                    className="content"
                                    style={{ marginBottom: "25px" }}
                                >
                                    <AboutContent>
                                        <AboutTextStyle primary>
                                            Ullamco cupidatat esse dolore esse
                                            cupidatat quis aute mollit officia
                                            est irure. In consequat laborum nisi
                                            ex consectetur ea deserunt et
                                            eiusmod consequat. Pariatur
                                            excepteur irure velit ut mollit elit
                                            cupidatat incididunt voluptate
                                            aliqua culpa pariatur. Nulla
                                            reprehenderit eu commodo aute
                                            reprehenderit exercitation et.
                                        </AboutTextStyle>
                                        <Button path="#" color="gradient">
                                            Meet The Kids{" "}
                                        </Button>
                                    </AboutContent>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Area>
            </SectionArea>
            <SectionArea center>
                <Container>
                    <Row>
                        <Col lg={12}>
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
                                title="Proident duis pariatur officia laboris amet laborum."
                                subTitle="Amet cupidatat deserunt quis incididunt."
                            />
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
                                        image={image}
                                        className="img-one"
                                        alt="Nurul-Yateem Foundation"
                                    />
                                </Tilt>
                            </div>
                        </Col>
                        <Col lg={6} xxl={6}>
                            <div className="content">
                                <ImpactContent>
                                    <ImpactTextStyle>
                                        Lorem dolor duis do aliqua est eiusmod.
                                        Cillum id eiusmod non do culpa proident
                                        labore in aliqua sint ullamco excepteur.
                                        Consequat labore ullamco sint minim
                                        dolor nisi do exercitation cillum. Amet
                                        laboris minim consequat velit pariatur
                                        magna exercitation voluptate nisi irure
                                        commodo.
                                    </ImpactTextStyle>
                                    <p>
                                        Excepteur irure ullamco ex ea ex dolore
                                        esse ullamco exercitation proident
                                        officia laboris fugiat nostrud. Qui
                                        tempor deserunt nisi officia officia ad
                                        est eiusmod consequat consequat dolor
                                        nisi. Excepteur laborum irure in
                                        exercitation.
                                    </p>
                                </ImpactContent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </SectionArea>
            <SponsorsArea />
        </Layout>
    );
};

OurWorkPage.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const ourWorkQuery = graphql`
    query OurWorkBySlug($slug: String!) {
        ourWorkJson(fields: { slug: { eq: $slug } }) {
            id
            title
            parText
            itemClassName
            destails1
            destails2
            destails3
            image {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    }
`;
export default OurWorkPage;
