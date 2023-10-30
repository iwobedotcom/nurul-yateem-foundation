import * as React from "react";

import Layout from "@layout";
import SEO from "@components/seo";
import Hero from "@containers/home/hero";
import OurWorkArea from "@containers/home/our-work";
import AboutArea from "../containers/home/about";
import ImpactArea from "../containers/home/impact";
import ChangeArea from "../containers/home/change";
import LatestBlog from "../containers/home/blog";
import SponsorsArea from "../containers/home/sponsors";

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" pathname="/" />
            <Hero />
            <OurWorkArea />
            <AboutArea />
            <ImpactArea />
            <ChangeArea />
            <LatestBlog />
            <SponsorsArea />
        </Layout>
    );
};

export default IndexPage;
