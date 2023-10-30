import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceItem from "@components/servies";
import { ServiceAare } from "./style";
import { graphql, useStaticQuery } from "gatsby";

const OurWorkArea = () => {
    const OurWorkQuery = useStaticQuery(graphql`
        query OurWorkDataQuery {
            allOurWorkJson {
                edges {
                    node {
                        id
                        title
                        subtitle
                        parText
                        itemClassName
                        iconImage {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const OurWorkData = OurWorkQuery.allOurWorkJson.edges;

    return (
        <ServiceAare>
            <Container>
                <Row className="icon-box-style1">
                    {OurWorkData &&
                        OurWorkData.slice(0, 3).map((data) => {
                            return (
                                <Col lg={4} md={6} sm={6} key={data.node.id}>
                                    <ServiceItem
                                        title={data.node.title}
                                        subtitle={data.node.subtitle}
                                        parText={data.node.parText}
                                        slug={data.node.fields.slug}
                                        itemClassName={data.node.itemClassName}
                                        image={data.node.iconImage}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </ServiceAare>
    );
};

export default OurWorkArea;
