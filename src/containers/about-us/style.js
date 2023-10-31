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
            0.7
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
export const ContentBoxWrp = styled.div`
    ${device.large} {
        margin-top: 44px;
        padding-left: 40px;
    }
`;

export const ContentBoxItem = styled.div`
    background-color: #fc6539;
    padding: 62px 25px 48px;
    position: relative;
    z-index: 1;
    ${device.large} {
        padding: 62px 35px 48px 43px;
    }
    & .img-line-shape {
        margin-bottom: 34px;
    }
    & .bg-line-shape {
        left: 0;
        position: absolute !important;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`;

export const Title = styled.h3`
    color: ${(props) => (props.dark ? themeGet("colors.text") : "")};
    font-size: 38px;
    margin-bottom: 59px;
    padding-left: 28px;
    position: relative;
    &::before {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        content: "";
        height: 82.5px;
        left: -1px;
        position: absolute;
        top: 50%;
        width: 82.5px;
        transform: translate(0, -50%);
        -webkit-transform: translate(0, -50%);
        -moz-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        -o-transform: translate(0, -50%);
    }
`;

export const ITitle = styled.h3`
    color: ${(props) => (props.primary ? themeGet("colors.primary") : "")};
    font-size: 38px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 28px;
    position: relative;
    &::before {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        content: "";
        height: 82.5px;
        left: -1px;
        position: absolute;
        top: 50%;
        width: 82.5px;
        transform: translate(0, -50%);
        -webkit-transform: translate(0, -50%);
        -moz-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        -o-transform: translate(0, -50%);
    }
`;

export const DesctionTextOne = styled.p`
    color: #fff;
    margin-bottom: 14px;
    font-size: 14px;
`;

export const DesctionTextTwo = styled.p`
    color: #fff;
    font-family: ${themeGet("fonts.heading")};
    font-size: 14px;
`;

export const CausesItemWrap = styled.div`
    margin-bottom: 30px;
`;
export const Thumb = styled.div`
    overflow: hidden;
    display: flex;
    img {
        width: 100%;
        transition: 0.8s;
        -webkit-transition: 0.8s;
        -moz-transition: 0.8s;
        -ms-transition: 0.8s;
        -o-transition: 0.8s;
    }
`;
export const ContentBox = styled.div`
    background-color: #f7f7f7;
    padding: 31px 20px 10px;
    p {
        font-size: 16px;
        font-weight: 500;
    }
    ${device.small} {
        padding: 31px 10px 10px;
    }
    ${device.medium} {
        padding: 31px 20px 10px;
    }
    ${device.large} {
        padding: 31px 10px 10px;
    }
    ${device.xlarge} {
        padding: 31px 25px 10px;
    }
`;
export const DonateInfo = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
`;
export const InfoItem = styled.li`
    background-color: #fff;
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
        min-width: 90px;
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

export const CausesFooter = styled.div`
    align-items: center;
    background-color: #f7f7f7;
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 33px;
    ${device.small} {
        padding: 15px 10px 33px;
    }
    ${device.medium} {
        padding: 15px 20px 33px;
    }
    ${device.large} {
        padding: 15px 10px 33px;
    }
    ${device.xlarge} {
        padding: 15px 25px 33px;
    }
`;

export const UserAdmin = styled.div``;

export const UserAdminTitle = styled.h5`
    font-family: ${themeGet("fonts.body")};
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 0;
    a {
        display: flex;
        align-items: center;
    }
`;

export const UserAdminImg = styled.div`
    box-shadow: 0px 3px 7px 0px rgb(252 102 57 / 8%);
    height: 40px;
    line-height: 45px;
    text-align: center;
    display: block;
    border-radius: 50%;
    background-color: #fff;
    min-width: 40px;
    margin-right: 11px;
    width: 40px;
`;

export const ChangeConten = styled.div`
    .thumb-bg-layer {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background: url(${aboutBg});
        margin-top: 70px;
        min-height: 300px;
        position: relative;
        width: auto;
        margin-top: 0;
        ${device.medium} {
            min-height: 320px;
        }
        ${device.large} {
            min-height: 236px;
            position: absolute;
            right: 0;
            width: calc(50% - 100px);
        }
        ${device.xlarge} {
            min-height: 286px;
            position: absolute;
            right: 0;
            width: calc(50% - 120px);
        }
        ${device.xxlarge} {
            min-height: 330px;
            position: absolute;
            right: 0;
            width: calc(50% - 215px);
        }
    }
`;
export const ChangeInfo = styled.div`
    padding-top: 30px;
    ${device.large} {
        padding-top: 280px;
    }
    ${device.xlarge} {
        padding-top: 320px;
    }
    ${device.xxlarge} {
        padding-top: 380px;
    }
    h3 {
        color: #fff;
        font-size: 40px;
        margin-bottom: 22px;
    }
    p {
        color: #fff;
        margin-bottom: 32px;
        ${device.large} {
            margin-right: -100px;
        }
    }
`;

export const ChangeItems = styled.div`
    display: flex;
`;
export const ChangeIem = styled.div`
    background-color: #13373e;
    border-radius: 50%;
    height: 62px;
    margin-right: 16px;
    padding: 4px;
    width: 62px;
    ${device.xlarge} {
        height: 76px;
        width: 76px;
        line-height: 74px;
        font-size: 20px;
    }
`;
export const ChangeNumber = styled.div`
    border-radius: 50%;
    height: 60px;
    width: 60px;
    line-height: 64px;
    padding: 4px;
    color: #fff;
    font-size: 14px;
    font-family: ${themeGet("fonts.heading")};
    text-align: center;
    background: #fea444;
    background: ${themeGet("colors.gradient")};
    ${device.xlarge} {
        height: 76px;
        width: 76px;
        line-height: 74px;
        font-size: 20px;
    }
`;

export const ImpactTextStyle = styled.p`
    /* color: ${themeGet("colors.white")}; */
    font-family: "Calibri", cursive;
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
