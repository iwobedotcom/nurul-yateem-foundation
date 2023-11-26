import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
    TeamMemberWrap,
    Thumb,
    SocialIcons,
    Content,
    TeamMemberInfo,
    MemberName,
    Designation,
} from "./style";

const Kids = ({ name, age, images }) => {
    const imgs = getImage(images);
    return (
        <TeamMemberWrap>
            <Thumb className="thumb">
                <GatsbyImage image={imgs} alt={name} />
                <SocialIcons className="socialHover">
                    <a href="#!">
                        <i className="icofont-heart"></i>
                    </a>
                </SocialIcons>
            </Thumb>
            <Content>
                <TeamMemberInfo>
                    <MemberName>
                        <a href="#/">{name}</a>
                    </MemberName>
                    {/* <Designation>{age}</Designation> */}
                </TeamMemberInfo>
            </Content>
        </TeamMemberWrap>
    );
};

Kids.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
    images: PropTypes.object,
};

export default Kids;
