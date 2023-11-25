/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import DonateForm from "@components/donate-form";
import { graphql, useStaticQuery } from "gatsby";
import Button from "@components/ui/button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SectionArea,
    ChangeConten,
    ChangeIem,
    ChangeInfo,
    ChangeItems,
    ChangeNumber,
} from "./style";

const ChangeArea = () => {
    const changeData = useStaticQuery(graphql`
        query ChangeQuery {
            changeJson {
                id
                title
                subTitle
                desction
                changeTitle
                changeCountTotal
                changeItemList {
                    changeImage {
                        childrenImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);
    const {
        title,
        subTitle,
        changeTitle,
        desction,
        changeCountTotal,
        changeItemList,
    } = changeData.changeJson;

    return (
        <SectionArea>
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
                                    mb: [
                                        "30px",
                                        "50px",
                                        "80px",
                                        "100px",
                                        "100px",
                                    ],
                                }}
                                title={title}
                                showImage={false}
                                // subTitle={subTitle}
                            />
                            <Button path="#" color="gradient" shape="rectangle">
                                Become a Guardian{" "}
                            </Button>
                        </div>
                    </Col>
                    {/* <Col lg={4} className="col-xxl-4 offset-xxl-1">
                        <ChangeConten>
                            <div className="thumb-bg-layer"></div>
                            <ChangeInfo>
                                <h3>{changeTitle}</h3>
                                <p>{desction}</p>
                                <ChangeItems>
                                    {changeItemList &&
                                        changeItemList.map((item, i) => {
                                            const img = getImage(
                                                item.changeImage
                                                    .childrenImageSharp[0]
                                            );
                                            return (
                                                <ChangeIem key={`change-${i}`}>
                                                    <GatsbyImage
                                                        image={img}
                                                        alt="Nurul-Yateem Foundation"
                                                    />
                                                </ChangeIem>
                                            );
                                        })}
                                    <ChangeNumber>
                                        {changeCountTotal}
                                    </ChangeNumber>
                                </ChangeItems>
                            </ChangeInfo>
                        </ChangeConten>
                    </Col> */}
                </Row>
            </Container>
        </SectionArea>
    );
};

export default ChangeArea;
