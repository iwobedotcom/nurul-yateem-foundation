/* eslint-disable prettier/prettier */
import styled, { themeGet, device } from "@theme/utils";
import aboutBg from "@data/images/about/bg.jpg";

export const SectionArea = styled.section`
    position: relative;
    padding: 46px 0 0px;
    background-color: ${(props) => (props.dark ? "#001d23" : "")};
    ${device.small} {
        padding: 48px 0 08px;
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

    position: relative;

    &:before {
        background-color: #f7f7f7;
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        width: calc(50% - 315px);
        z-index: -1;
    }
    & .img-one {
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

export const DetailsArea = styled.section`
    padding: 70px 0 70px;
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

export const Area = styled.section`
    background-image: url(${aboutBg});
    background-size: cover;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    position: relative;
    padding: 46px 0 45px;
    ${device.small} {
        padding: 48px 0 48px;
    }
    ${device.medium} {
        padding: 60px 0 45px;
    }
    ${device.large} {
        padding: 60px 0 45px;
    }
    ${device.xlarge} {
        padding: 60px 0 45px;
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
        & span {
            color: green;
        }
    }
`;

export const AboutTextStyle = styled.p`
    color: ${(props) => (props.primary ? themeGet("colors.white") : "")};
    font-family: "Calibri", cursive;
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

export const CausesDetailsContent = styled.div`
    ${device.large} {
        padding-right: 50px;
    }
    .row {
        margin-left: -15px;
        margin-right: -15px;
    }
`;
export const CausesDetails = styled.div``;
export const Thumb = styled.div``;
export const CauseTitle = styled.h4`
    font-size: 40px;
    margin-bottom: 25px;
    margin-top: 25px;
`;
export const DonateInfoWrap = styled.div`
    border-bottom: 1px solid #ededed;
    border-top: 1px solid #ededed;
    margin-bottom: 34px;
    padding: 10px 0;
`;

export const DonateInfo = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    padding-right: 3px;
`;
export const InfoItem = styled.li`
    background-color: #f7f7f7;
    font-family: ${themeGet("fonts.heading")};
    min-width: 75px;
    min-width: 90px;
    padding: 7px 13px 6px;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    ${device.small} {
        min-width: 80px;
        padding: 7px 5px 6px;
    }
    ${device.medium} {
        min-width: 100px;
        padding: 7px 13px 6px;
    }
`;
export const InfoItemTitle = styled.span`
    color: #001d23;
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    line-height: 1;
`;
export const Amount = styled.span`
    color: #fc6539;
    font-size: 16px;
    background: #fea444;
    background: ${themeGet("colors.gradient")};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: block;
    line-height: 1;
    ${device.xlarge} {
        font-size: 20px;
    }
`;
export const ShortTitle = styled.h4``;
export const SingleDetailsText = styled.p``;

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
