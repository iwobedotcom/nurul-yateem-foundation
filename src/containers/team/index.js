/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { SectionArea, TeamMemberItemsWrap } from "./style";
import Team from "@components/team";
import { graphql, useStaticQuery } from "gatsby";

const TeamArea = () => {
    const teamQuery = useStaticQuery(graphql`
        query TeamQuery {
            teamJson {
                id
                section_title {
                    title
                }
                team {
                    designation
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
        team,
    } = teamQuery.teamJson;
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
                        />
                    </Col>
                </Row>

                <TeamMemberItemsWrap>
                    <Row>
                        {team &&
                            team.map((item, i) => {
                                return (
                                    <Col lg={4} key={i}>
                                        <Team
                                            name={item.name}
                                            designation={item.designation}
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

export default TeamArea;
