import styled, { themeGet, device } from "@theme/utils";
import itemOneBg from "@data/images/services/1.jpg";
import itemTwoBg from "@data/images/services/2.jpg";
import itemThreeBg from "@data/images/services/3.jpg";

export const IconBoxitem = styled.div`
    /* background-image: url(${itemOneBg}); */
    background-color: ${themeGet("colors.white")};
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    padding: 60px 25px; /* Increase the top and bottom padding to adjust the height */
    margin-bottom: 30px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 16px;
    &.item-two {
        /* background-image: url(${itemTwoBg}); */
    }
    &.item-three {
        /* background-image: url(${itemThreeBg}); */
    }
    ${device.medium} {
        padding: 60px 25px; /* Increase the top and bottom padding for medium devices */
    }
    ${device.large} {
        padding: 60px 25px; /* Increase the top and bottom padding for large devices */
    }
    ${device.xlarge} {
        padding: 67px 47px 58px 58px; /* Increase the top and bottom padding for extra-large devices */
    }
`;

export const IconBoxTop = styled.div`
    display: contents;
    align-items: center;
    margin-bottom: 5px;
    padding-left: 20px;
    ${device.medium} {
        margin-bottom: 33px;
        padding-left: 22px;
    }
`;
export const IconBox = styled.div`
    margin-right: 10px;
    min-height: 78px;
    min-width: 50px;
    position: relative;
    top: 7px;
    &:after {
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    content: "";
    height: 83px;
    width: 83px;
    left: -27px;
    position: absolute;
    top: -15px;
    
    ${device.small}{
       
    }
    ${device.medium}{
        margin-right: 11px;
        min-height: 89px;
        min-width: 87px;

    }
    img {
        min-width: auto;
        width: 40px;
        ${device.medium}{
            min-width: 76px;
        }
    }
`;

export const Title = styled.h4`
    position: relative;
    color: ${themeGet("colors.primary")};
    z-index: 1;
    font-size: 24px;
    font-family: ${themeGet("fonts.secondary")};
    line-height: 1.185;
    margin-top: 10px;
    margin-bottom: 5px;
    ${device.medium} {
        font-size: 28px;
    }
    ${device.large} {
        font-size: 30px;
    }
    ${device.xlarge} {
        font-size: 38px;
    }
`;

export const SubTitle = styled.h6`
    color: ${themeGet("colors.primary")};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 10px;
    font-family: ${themeGet("fonts.body")};
    text-transform: uppercase;
    position: relative;
    z-index: 1;

    ${device.medium} {
        font-size: 18px;
    }

    ${device.large} {
        font-size: 20px;
    }

    ${device.xlarge} {
        font-size: 24px;
    }
`;

export const ContentBox = styled.div``;
export const SeparatorLine = styled.div`
    margin-bottom: 27px;
`;
export const ParText = styled.p`
    position: relative;
    z-index: 1;
    color: ${themeGet("colors.text")};
    line-height: 1.667;
    margin-bottom: 32px;
`;
