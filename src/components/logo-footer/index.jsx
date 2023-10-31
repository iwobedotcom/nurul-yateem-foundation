import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import LiteLogo from "@assets/images/logo/logo_footer.png";
import { FooterLogoArea } from "./style";

const FooterLogo = ({ className }) => {
    return (
        <FooterLogoArea className={className}>
            <Link to="/">
                <img className="logo-main" src={LiteLogo} alt="Logo" />
            </Link>
        </FooterLogoArea>
    );
};

FooterLogo.propTypes = {
    className: PropTypes.string,
};

export default FooterLogo;
