/* eslint-disable prettier/prettier */
import styled, { themeGet, device } from "@theme/utils";

import DonnerImag from "@data/images/photos/bg-donate1.jpg";

export const SectionArea = styled.section`
    text-align: center;
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

export const LlistIconStyle = styled.ul`
    align-items: center;
    display: block;
    /* color: ${themeGet("colors.white")}; */
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
