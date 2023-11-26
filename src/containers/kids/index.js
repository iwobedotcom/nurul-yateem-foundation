/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { SectionArea, TeamMemberItemsWrap } from "./style";
import Kids from "@components/kids";
import { graphql, useStaticQuery } from "gatsby";

const KidsArea = () => {
    const kidsQuery = useStaticQuery(graphql`
        query KidQuery {
            kidsJson {
                id
                section_title {
                    title
                }
                kids {
                    age
                    name
                    images {
                        childrenImageSharp {
                            gatsbyImageData(width: 580)
                        }
                    }
                }
            }
        }
    `);
    const {
        section_title: { title, subTitle },
        kids,
    } = kidsQuery.kidsJson;
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <SectionTitle
                            sx={{ mb: "30px" }}
                            titleStyle
                            textCenter
                            title={title}
                            showImage={false}
                        />
                    </Col>
                </Row>

                <TeamMemberItemsWrap>
                    <Row>
                        {kids &&
                            kids.map((item, i) => {
                                return (
                                    <Col lg={4} key={i}>
                                        <Kids
                                            name={item.name}
                                            age={item.age}
                                            images={
                                                item.images
                                                    .childrenImageSharp[0]
                                            }
                                        />
                                    </Col>
                                );
                            })}
                    </Row>
                </TeamMemberItemsWrap>
            </Container>
        </SectionArea>
    );
};

export default KidsArea;
