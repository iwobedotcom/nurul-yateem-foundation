import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { PageBreadcrumbWrap, PageTitleContent } from "./style";

const PageBreadcrumb = ({ title, pageContext }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext;

    // Paths to be excluded from breadcrumbs
    const excludePaths = [
        "/events",
        "/category",
        "/profile",
        "/date",
        "/tag",
        "/page",
        // "/blog",
        "/blog/page",
        "/blogs",
        "/services",
        "/about-us",
        "/our-work",
        "/",
    ];

    // Filter out crumbs based on the excludePaths array
    const filteredCrumbs = crumbs.filter(
        (crumb) => !excludePaths.includes(crumb.pathname)
    );

    return (
        <PageBreadcrumbWrap>
            <Container>
                <Row>
                    <Col>
                        <PageTitleContent>
                            <Breadcrumb title={title} crumbs={filteredCrumbs} />
                        </PageTitleContent>
                    </Col>
                </Row>
            </Container>
        </PageBreadcrumbWrap>
    );
};

PageBreadcrumb.propTypes = {
    title: PropTypes.string,
    crumbLabel: PropTypes.string,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default PageBreadcrumb;
