import React from "react";
import SearchBox from "@components/blog/blog-sidebar/search";
import UrgentCauses from "@components/blog/blog-sidebar/causes";
import AllCategories from "./categories";
import AllTags from "./tags";
import { StaticImage } from "gatsby-plugin-image";
import { SidebarArea, Widget, WidgetTitle, SeparatorLine } from "./style";

const BlogSidebar = () => {
    return (
        <SidebarArea>
            <Widget>
                <WidgetTitle>Search Here</WidgetTitle>
                <SeparatorLine>
                    <StaticImage
                        className="me-1"
                        src="../../../data/images/shape/line-t2.png"
                        alt="Nurul-Yateem Foundation"
                    />
                </SeparatorLine>
                <SearchBox />
            </Widget>

            <Widget>
                <WidgetTitle>Blog Categories</WidgetTitle>
                <SeparatorLine>
                    <StaticImage
                        className="me-1"
                        src="../../../data/images/shape/line-t2.png"
                        alt="Nurul-Yateem Foundation"
                    />
                </SeparatorLine>
                <AllCategories />
            </Widget>

            {/* <Widget>
                <WidgetTitle>Urgent Causes</WidgetTitle>
                <SeparatorLine>
                    <StaticImage
                        className="me-1"
                        src="../../../data/images/shape/line-t2.png"
                        alt="Nurul-Yateem Foundation"
                    />
                </SeparatorLine>
                <UrgentCauses />
            </Widget> */}

            <Widget className="mb-0 pb-3">
                <WidgetTitle>Popular Tags</WidgetTitle>
                <SeparatorLine>
                    <StaticImage
                        className="me-1"
                        src="../../../data/images/shape/line-t2.png"
                        alt="Nurul-Yateem Foundation"
                    />
                </SeparatorLine>
                <AllTags />
            </Widget>
        </SidebarArea>
    );
};

export default BlogSidebar;
