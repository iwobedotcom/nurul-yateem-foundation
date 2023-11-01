import styled, { themeGet, device } from "@theme/utils";
import aboutBg from "@data/images/about/bg.jpg";

export const SectionArea = styled.div`
    background-color: ${themeGet("colors.white")};
    position: relative;
    padding: 75px 0 0;
`;

export const Area = styled.section`
    /* background-image: url(${aboutBg}); */
    background-color: #f9f9f9;
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    position: relative;
    padding-top: 92px;
    padding-bottom: 92px;
    /* ${device.small} {
        padding: 48px 0 48px;
    }
    ${device.medium} {
        padding: 88px 0 92px;
    }
    ${device.large} {
        padding: 88px 0 92px;
    }
    ${device.xlarge} {
        padding: 146px 0 15px;
    } */
    & .img-one {
        display: none !important;
        ${device.small} {
            display: inline-block !important;
        }
        ${device.large} {
            display: none !important;
        }
        ${device.xlarge} {
            display: inline-block !important;
        }
    }
    /* h2 {
        color: ${themeGet("colors.text")};
        font-size: ${themeGet("colors.h2[3]")};
    } */
`;

export const LayerStyle = styled.div`
    margin-top: 25px;
    position: relative;
    &:before {
        background-color: #fff;
        border-radius: 50%;
        content: "";
        height: 546px;
        left: -201px;
        position: absolute;
        top: -331px;
        width: 546px;
        z-index: -1;
    }

    .row > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }
    .row.m-0 {
        margin: 0 !important;
    }
    .img-two {
        margin-left: 0px;
        ${device.small} {
            margin-left: 0px;
        }
        ${device.large} {
            margin-left: 0px;
        }
        ${device.xlarge} {
            margin-left: -23px;
        }
    }
`;
export const Thumb = styled.div``;

export const AboutTextStyle = styled.p`
    color: ${themeGet("colors.text")};
    font-family: "Calibri", cursive;
    font-size: 22px;
    line-height: 1.364;
    margin-bottom: 26px;
    margin-right: -10px;
    margin-left: 20px;
    position: relative;
    &:before {
        background-color: ${themeGet("colors.primary")};
        content: "";
        height: 105px;
        left: -18px;
        position: absolute;
        top: 9px;
        width: 4px;
    }
`;
export const AboutContent = styled.div`
    padding-bottom: 45px;
`;

export const LlistIconStyle = styled.ul`
    align-items: center;
    display: block;
    color: ${themeGet("colors.white")};
    font-size: 15px;
    font-weight: 700;
    justify-content: space-between;
    line-height: 25px;
    margin-bottom: 42px;
    margin-top: 29px;
    position: relative;
    ${device.small} {
        display: flex;
    }
`;

export const ListLi = styled.li`
    align-items: flex-start;
    display: flex;
    margin-bottom: 10px;
    .icon-img {
        margin-right: 20px;
        max-width: none;
        position: relative;
        top: 6px;
    }
    &.line-center {
        background-color: ${themeGet("colors.primary")};
        height: 43px;
        position: relative;
        top: -2px;
        width: 4px;
        display: none;
        ${device.small} {
            display: inline-block;
        }
    }
`;
export const ListText = styled.span``;
