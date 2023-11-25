/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/heart.svg";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "@components/logo";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    FooterWrap,
    FooterMain,
    WidgetItem,
    AboutWidget,
    AboutWidgetText,
    CopyrightText,
    WidgetTitle,
    WidgetMenuWrap,
    NavMenu,
    NavItem,
    FooterShapeLayer,
    WidgetSubTitle,
} from "./style";
import NewsletterForm from "../../components/newsletter-form";
import FooterLogo from "../../components/logo-footer";

const Footer = () => {
    const footerQuery = useStaticQuery(graphql`
        query FooterQuery {
            footerJson {
                id
                quickLink {
                    path
                    text
                }
                quickLinkTwo {
                    path
                    text
                }
                footerShapeImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                footerAbout
                menuTitle
                socialTitle
                socialSubTitle
            }
        }
    `);
    const {
        footerAbout,
        menuTitle,
        socialTitle,
        socialSubTitle,
        quickLink,
        quickLinkTwo,
        footerShapeImage,
    } = footerQuery.footerJson;
    const footerimage = getImage(footerShapeImage);
    return (
        <FooterWrap>
            <FooterMain>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <WidgetItem>
                                <AboutWidget>
                                    <FooterLogo className="footer-logo" />
                                    <AboutWidgetText>
                                        {footerAbout}
                                    </AboutWidgetText>
                                </AboutWidget>
                            </WidgetItem>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <WidgetItem className="menu-wrap-two-column">
                                <WidgetTitle>{menuTitle}</WidgetTitle>
                                <WidgetMenuWrap>
                                    <Row>
                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={6}
                                            className="pr-sm-5"
                                        >
                                            <NavMenu>
                                                {quickLink.map(
                                                    (linkItem, i) => (
                                                        <NavItem
                                                            key={`id-${i}-one`}
                                                        >
                                                            <Link
                                                                to={
                                                                    linkItem.path
                                                                }
                                                            >
                                                                {linkItem.text}
                                                            </Link>
                                                        </NavItem>
                                                    )
                                                )}
                                            </NavMenu>
                                        </Col>

                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={6}
                                            className="col-6 pl-sm-5"
                                        >
                                            <NavMenu className="align-right">
                                                {quickLinkTwo.map(
                                                    (linkItem, i) => (
                                                        <NavItem
                                                            key={`id-${i}`}
                                                        >
                                                            <Link
                                                                to={
                                                                    linkItem.path
                                                                }
                                                            >
                                                                {linkItem.text}
                                                            </Link>
                                                        </NavItem>
                                                    )
                                                )}
                                            </NavMenu>
                                        </Col>
                                    </Row>
                                </WidgetMenuWrap>
                            </WidgetItem>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <WidgetItem>
                                <WidgetTitle>{socialTitle}</WidgetTitle>
                                <WidgetSubTitle>
                                    {socialSubTitle}
                                </WidgetSubTitle>
                                <NewsletterForm />
                            </WidgetItem>
                        </Col>
                    </Row>
                </Container>
                {/* <div className="scroll-to-top">
                    <img
                        src="assets/img/icons/arrow-up-line.png"
                        alt="Icon-Image"
                    />
                </div> */}
            </FooterMain>
            <Container>
                <Row>
                    <Col sx={{ textAlign: "center" }}>
                        <CopyrightText>
                            &copy; {new Date().getFullYear()}{" "}
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Nurul-Yateem Foundation.
                            </a>{" "}
                            All rights reserved.
                        </CopyrightText>
                    </Col>
                </Row>
            </Container>
            <FooterShapeLayer>
                <GatsbyImage
                    image={footerimage}
                    alt="Nurul-Yateem Foundation"
                />
            </FooterShapeLayer>
        </FooterWrap>
    );
};

export default Footer;
