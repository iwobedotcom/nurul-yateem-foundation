/* eslint-disable prettier/prettier */
import styled, { themeGet, device } from "@theme/utils";
import serviceBg from "@data/images/services/bg1.jpg";

export const SectionArea = styled.section`
    text-align: ${(props) => (props.center ? "center" : "end")};
    overflow: hidden;
    padding: 80px 0;
    background-color: ${themeGet("colors.white")};
    ${device.large} {
        padding: 100px 0;
    }
    ${device.xlarge} {
        padding: 105px 0 104px;
    }
`;

export const ServicesDetailsArea = styled.section`
    padding: 70px 0 280px;
    ${device.medium} {
        padding: 100px 0 300px;
    }
    ${device.large} {
        padding: 120px 0 300px;
    }
    ${device.xlarge} {
        padding: 150px 0 390px;
    }
`;
export const ServicesDetailsContent = styled.div`
    ${device.large} {
        padding-right: 50px;
    }
    .row {
        margin-left: -15px;
        margin-right: -15px;
    }
`;
export const ServicesDetails = styled.div``;
export const Thumb = styled.div``;
export const ServicesTitle = styled.h4`
    margin-bottom: 25px;
    margin-top: 25px;
`;

export const DocumentItem = styled.a`
    align-items: center;
    background-color: #fc6539;
    display: flex;
    height: 75px;
    justify-content: space-between;
    margin-bottom: 23px;
    margin-top: 10px;
    padding: 15px 30px;
    width: 100%;
    &.bgcolor-theme2 {
        background-color: #fea444 !important;
    }
`;
export const DocumentItemTitle = styled.h6`
    color: #fff;
`;

export const ImpactTextStyle = styled.p`
    /* color: ${themeGet("colors.white")}; */
    font-family: "Yeseva One", cursive;
    text-align: start;
    font-size: 22px;
    line-height: 1.364;
    margin-bottom: 26px;
    margin-right: -10px;
    position: relative;
    /* &:before {
        background-color: ${themeGet("colors.primary")};
        content: "";
        height: 75px;
        left: -29px;
        position: absolute;
        top: 7px;
        width: 4px;
    } */
`;
export const ImpactContent = styled.div``;

export const Area = styled.section`
    background-image: url(${serviceBg});
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    position: relative;
    padding: 46px 0 45px;
    ${device.small} {
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
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(
            0,
            0,
            0,
            0.5
        ); /* Adjust the color and opacity as needed */
    }
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
    h2 {
        color: ${themeGet("colors.white")};
    }
`;

export const ImageArea = styled.section`
    background-image: url(${serviceBg});
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    position: relative;
    padding: 250px 0 45px; /* Increase the top padding to make the background taller */
    ${device.small} {
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
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(
            0,
            0,
            0,
            0.5
        ); /* Adjust the color and opacity as needed */
    }
`;

export const AboutTextStyle = styled.p`
    color: ${(props) => (props.primary ? themeGet("colors.white") : "")};
    font-family: "Yeseva One", cursive;
    font-size: 22px;
    line-height: 1.364;
    margin-bottom: 26px;
    margin-right: -10px;
    position: relative;
    /* &:before {
        background-color: #fc6539;
        content: "";
        height: 75px;
        left: -29px;
        position: absolute;
        top: 7px;
        width: 4px;
    } */
`;
export const AboutContent = styled.div`
    padding-left: 0px;
    ${device.large} {
        padding-left: 0;
    }
`;

export const LayerStyle = styled.div`
    margin-top: 0px;
    position: relative;

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

export const ContentBoxWrp = styled.div`
    ${device.large} {
        margin-top: 44px;
        padding-left: 40px;
    }
`;
