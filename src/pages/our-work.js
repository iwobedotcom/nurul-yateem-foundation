/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import SponsorsArea from "../containers/home/sponsors";
import PageBreadcrumb from "../components/pagebreadcrumb";
import OurWorkAll from "../containers/our-work";

const OurWorkPages = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Our Work" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Nurul-Yateem Foundation Offerings"
            />
            <OurWorkAll />
            <SponsorsArea />
        </Layout>
    );
};

OurWorkPages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default OurWorkPages;
