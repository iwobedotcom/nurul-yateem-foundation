import styled, { themeGet, device } from "@theme/utils";

export const ServiceAare = styled.section`
    background-color: ${themeGet("colors.white")};
    padding: 65px 0 0;
    position: relative;
    z-index: 1;
    ${device.small} {
        padding: 135px 0 0;
    }
`;
