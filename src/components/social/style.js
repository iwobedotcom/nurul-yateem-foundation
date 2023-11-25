import styled, { themeGet, device } from "@theme/utils";
export const SectionArea = styled.section`
    padding: 60px 15px 267px;
    ${device.medium} {
        padding: 38px 0 292px;
    }
    ${device.large} {
        padding: 88px 0 292px;
    }
    ${device.xlarge} {
        padding: 109px 0 292px;
    }
`;
export const SocialIconContent = styled.div`
    margin: 16px -27px 0;
`;
