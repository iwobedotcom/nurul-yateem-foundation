import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { SocialItem } from "./style";

const SocialIcon = ({ socialIcon }) => {
    const icon = getImage(socialIcon);
    return (
        <SocialItem>
            <GatsbyImage image={icon} alt="Social-icon" />
        </SocialItem>
    );
};

SocialIcon.propTypes = {
    socialIcon: PropTypes.string,
};

export default SocialIcon;
