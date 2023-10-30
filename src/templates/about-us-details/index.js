/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import Button from "@components/ui/button";
import SectionTitle from "../../components/title";
import { Row, Container, Col } from "react-bootstrap";
import BlogSidebar from "@containers/blog/blog-sideber";
import CausesDonateForm from "@components/causes-donate-form";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    DetailsArea,
    CausesDetailsContent,
    CausesDetails,
    Thumb,
    CauseTitle,
    DonateInfoWrap,
    DonateInfo,
    InfoItem,
    InfoItemTitle,
    Amount,
    ShortTitle,
    DocumentItem,
    DocumentItemTitle,
    SingleDetailsText,
    Area,
    AboutContent,
    AboutTextStyle,
} from "./style";
import LatestBlog from "../../containers/home/blog";

const AboutUsPage = ({ data, location, pageContext }) => {
    const parts = location.pathname.split("/");
    const pgName = parts[parts.length - 2];
    const decodedPageName = decodeURIComponent(pgName.replace(/-/g, " "));
    const pageName = decodedPageName.replace(/\b\w/g, (match) =>
        match.toUpperCase()
    );

    const aboutUsData = data.aboutUsJson;

    const pageImageOne = getImage(aboutUsData.imageOne.childImageSharp);
    const pageImageTwo = getImage(aboutUsData.imageTwo.childImageSharp);

    return (
        <Layout>
            <SEO title={"About Us"} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title={pageName}
            />
            <div className="mt-5">
                <Area>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <SectionTitle
                                    sx={{ mb: "30px" }}
                                    showImage={false}
                                    title={aboutUsData.heading}
                                    subTitle={aboutUsData.subHeading}
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
                                            {aboutUsData.headingPara}
                                        </AboutTextStyle>
                                    </AboutContent>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Area>
                <DetailsArea>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <CausesDetailsContent>
                                    <CausesDetails>
                                        <CauseTitle>
                                            {aboutUsData?.detailsHead1}
                                        </CauseTitle>
                                        <SingleDetailsText>
                                            {aboutUsData?.detailstext1}
                                        </SingleDetailsText>
                                        <SingleDetailsText>
                                            {aboutUsData?.detailstext2}
                                        </SingleDetailsText>
                                        <Thumb className="mb-3">
                                            <GatsbyImage
                                                image={pageImageOne}
                                                alt="Nurul-Yateem Foundation"
                                            />
                                        </Thumb>
                                        <SingleDetailsText>
                                            {aboutUsData?.detailstext3}
                                        </SingleDetailsText>

                                        <CauseTitle>
                                            {aboutUsData?.detailsHead2}
                                        </CauseTitle>
                                        <SingleDetailsText>
                                            {aboutUsData?.detailstext4}
                                        </SingleDetailsText>
                                        <Thumb className="mb-3">
                                            <GatsbyImage
                                                image={pageImageTwo}
                                                alt="Nurul-Yateem Foundation"
                                            />
                                        </Thumb>
                                        <SingleDetailsText>
                                            {aboutUsData?.detailstext5}
                                        </SingleDetailsText>
                                        <SingleDetailsText>
                                            {aboutUsData?.detailstext6}
                                        </SingleDetailsText>
                                    </CausesDetails>
                                </CausesDetailsContent>
                            </Col>
                        </Row>
                    </Container>
                </DetailsArea>
            </div>
        </Layout>
    );
};

AboutUsPage.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const aboutUsQuery = graphql`
    query AboutUsBySlug($slug: String!) {
        aboutUsJson(fields: { slug: { eq: $slug } }) {
            id
            title
            heading
            subHeading
            headingPara
            imageOne {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
            imageTwo {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
            detailsHead1
            detailsHead2
            detailsHead3
            detailstext1
            detailstext2
            detailstext3
            detailstext4
            detailstext5
            detailstext6
            fields {
                slug
            }
        }
    }
`;
export default AboutUsPage;
