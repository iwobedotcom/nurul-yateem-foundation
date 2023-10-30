import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { PageBreadcrumbWrap, PageTitleContent } from "./style";

const PageBreadcrumb = ({ title, pageContext }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext;
    const disableLinks = [
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
    ];
    return (
        <PageBreadcrumbWrap>
            <Container>
                <Row>
                    <Col>
                        <PageTitleContent>
                            <Breadcrumb
                                title={title}
                                crumbs={crumbs}
                                disableLinks={disableLinks}
                            />
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
