/* eslint-disable prettier/prettier */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import Button from "@components/ui/button";
import {
    IconBoxitem,
    IconBoxTop,
    IconBox,
    Title,
    ContentBox,
    SeparatorLine,
    ParText,
    SubTitle,
} from "./style";

const ServiceItem = ({
    title,
    subtitle,
    parText,
    slug,
    image,
    itemClassName,
}) => {
    const iconImg = getImage(image);
    return (
        <IconBoxitem className={`${itemClassName} mb-5`}>
            <IconBoxTop>
                {/* <IconBox>
                    <GatsbyImage image={iconImg} alt="" />
                </IconBox> */}
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </IconBoxTop>
            <ContentBox>
                <SeparatorLine>
                    <StaticImage
                        src="../../data/images/shape/line-s1.png"
                        alt="Nurul-Yateem Foundation"
                    />
                </SeparatorLine>
                <ParText>{parText}</ParText>
                <Button
                    path={`/our-work/${slug}`}
                    size="small"
                    variant="outlined"
                    color="light"
                    sx={{ color: "#fff" }}
                >
                    Learn More{" "}
                    <i sx={{ ml: "8px" }} className="flaticon-right-arrow"></i>
                </Button>
            </ContentBox>
        </IconBoxitem>
    );
};

ServiceItem.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    parText: PropTypes.string,
    image: PropTypes.object,
    itemClassName: PropTypes.string,
    slug: PropTypes.string,
};

// ServiceItem.defaultProps = {
//     path: "#!",
// };

export default ServiceItem;
