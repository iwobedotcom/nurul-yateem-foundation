/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { SectionArea, SocialIconContent } from "./style";
import SponsorLogo from "@components/sponsors";
import SocialIcon from "../socialIcon";
import { graphql, useStaticQuery } from "gatsby";

const SocialsArea = () => {
    const socialsQuery = useStaticQuery(graphql`
        query SocialsQuery {
            allSocialsJson {
                edges {
                    node {
                        id
                        socialIcon {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);
    const socialsData = socialsQuery.allSocialsJson.edges;
    return (
        // <SectionArea>
        <Container>
            <Row>
                <Col xl={{ span: 7, offset: 1 }} lg={8}>
                    <SocialIconContent>
                        <Row className="row row-cols-3 row-cols-sm-5">
                            {socialsData &&
                                socialsData.map((item) => {
                                    return (
                                        <Col key={item.node.id}>
                                            <SocialIcon
                                                socialIcon={
                                                    item.node.socialIcon
                                                        .childImageSharp
                                                }
                                            />
                                        </Col>
                                    );
                                })}
                        </Row>
                    </SocialIconContent>
                </Col>
            </Row>
        </Container>
        // </SectionArea>
    );
};

export default SocialsArea;
