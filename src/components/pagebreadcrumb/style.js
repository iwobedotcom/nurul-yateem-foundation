import styled, { device, themeGet } from "@theme/utils";

import image from "../../data/images/photos/bg-page-title.jpg";

export const PageBreadcrumbWrap = styled.div`
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1033%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 29%2c 35%2c 1)'%3e%3c/rect%3e%3cpath d='M153.86771109074493 33.047875594024674L89.62715021942775-58.69715336634238-15.870112785464215 83.53620242081693z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-37.31911821459653 54.37110873252023L129.02640330419743 150.62223122858032 131.958407585661-17.3521815576934z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M144.08785199939783 104.42952837908982L157.7372184607744-6.735640604738251-15.835218245655966 28.372894195110973z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1267.08 -13.75 a47.17 47.17 0 1 0 94.34 0 a47.17 47.17 0 1 0 -94.34 0z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1253.6317903110407 76.6482959276976L1389.546645366032 175.39621831283307 1488.2945677511675 39.48136325784186 1352.3797126961763-59.26655912729359z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1515.9932658214886 55.99999999999998L1397.1993265821486-62.793939239339984 1278.4053873428088 56.00000000000001 1397.1993265821486 174.79393923933998z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M19.617725223314515 377.1199294439983L-61.83029097807012 524.0560402434168 85.10581982134838 605.5040564448013 166.553836022733 458.5679456453829z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M62.90799378439666 372.1876263619498L-61.94033689580554 484.601568230238 175.32193565268486 497.035957042152z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M180.03309788588592 549.1443556942887L109.03322991344841 396.8846474721315-43.22647830870875 467.88451544456905 27.77338966372875 620.1442236667262z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1427.7529954258182 413.49826366219713L1316.025821796718 405.6855386028551 1360.1703210222552 577.1826615761765z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1515.912859090289 499.3935014547106L1393.0454372182683 384.81777696421085 1278.4697127277686 507.6851988362315 1401.3371345997894 622.2609233267312z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1500.543136330672 442.0329152175721L1339.883937328882 392.9144688241523 1451.4246899372522 602.6921142193621z' fill='rgba(62%2c 137%2c 20%2c 0.53)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1033'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    padding: 35px 0;
    position: relative;
    z-index: 1;
`;

export const PageTitleContent = styled.div`
    letter-spacing: 0;
    padding: 77px 0;
    text-align: center;
    & .breadcrumb__title {
        font-size: 38px;
        line-height: 1.414;
        margin-bottom: 6px;
        font-family: ${themeGet("fonts.heading")};
        color: #fff;
        ${device.large} {
            font-size: 58px;
        }
    }
    & .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0;
        margin-bottom: 1rem;
        list-style: none;
        justify-content: center;
        ol {
            list-style: none;
            display: flex;
            align-items: center;
            color: #fff;
            padding: 0;
            & .breadcrumb__separator {
                margin-right: 10px;
                margin-left: 10px;
            }
            .breadcrumb__link {
                color: #fff;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 8px;
                &.breadcrumb__link__active {
                    color: #fea444;
                }
            }
        }
    }
`;
