import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import SponsorsArea from "../containers/home/sponsors";
import PageBreadcrumb from "../components/pagebreadcrumb";
import AboutAll from "../containers/about-us";

const AboutUsPages = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="About Us" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="About Nurul-Yateem Foundation"
            />
            <AboutAll />
            <SponsorsArea />
        </Layout>
    );
};

AboutUsPages.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default AboutUsPages;
