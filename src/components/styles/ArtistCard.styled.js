import styled from "styled-components";
import myBannerImage from "../../assets/images/header-banner.png";

export const AppMusicCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`;

export const BillboardBanner = styled.div`
  background-image: url(${myBannerImage});
  position: absolute;
  height: 159px;
  width: 412px;
  left: 0px;
  top: 38px;
  cursor: pointer;
`;

export const Title = styled.div`
  position: absolute;
  width: 155px;
  left: 16px;
  top: 216px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const SubTitle = styled.div`
  position: absolute;
  right: 16px;
  top: 245px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #d9d9d9e5;
  cursor: pointer;
`;

export const Text = styled.div`
  height: 17px;
  width: 167px;
  position: absolute;
  left: 15px;
  top: 536px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubText = styled.div`
  position: absolute;
  right: 16px;
  top: 536px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #d9d9d9e5;
  cursor: pointer;
`;

export const BurnaCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 278px;
  left: 15px;
  cursor: pointer;
`;

export const BurnaTitle = styled.p`
  position: absolute;
  left: 33px;
  top: 444px;
  width: 121px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #ffffff;
`;

export const BurnaContent = styled.p`
  height: 21.603561401367188px;
  width: 142.42347717285156px;
  position: absolute;
  left: 35px;
  top: 467px;
  font-size: 8px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const LojayCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 278px;
  right: 30.87px;
  cursor: pointer;
`;

export const LojayTitle = styled.p`
  position: absolute;
  left: 233px;
  top: 444px;
  width: 121px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #ffffff;
`;

export const LojayContent = styled.p`
  height: 21.603561401367188px;
  width: 142.42347717285156px;
  position: absolute;
  left: 233px;
  top: 467px;
  font-size: 8px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const SecondBurnaCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 279px;
  left: 410px;
  cursor: pointer;
`;

export const SecondLojayCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 570px;
  right: 30.87px;
  cursor: pointer;
`;

export const ThirdBurnaCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 570px;
  left: 15px;
  cursor: pointer;
`;

export const ThirdBurnaTitle = styled.p`
  position: absolute;
  left: 33px;
  top: 736px;
  width: 121px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #ffffff;
  z-index: 1;
`;

export const SecondLojayTitle = styled.p`
  position: absolute;
  left: 233px;
  top: 736px;
  width: 121px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: left;
  color: #ffffff;
  z-index: 1;
`;

export const FourthBurnaCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 570px;
  left: 410px;
  cursor: pointer;
`;

//Footer Styles
export const Footer = styled.div`
  position: absolute;
  height: 92px;
  width: 428px;
  left: 0px;
  top: 751px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const HomeIcon = styled.img`
  width: 25.155181884765625px;
  height: 29.4px;
  left: 44px;
  top: 871px;
  cursor: pointer;
  position: absolute;
  top: 37px;
  left: 44px;
  z-index: 1;
`;

export const EyeIcon = styled.img`
  width: 34.26810836791992px;
  position: absolute;
  top: 37px;
  left: 144px;
`;

export const LibraryIcon = styled.img`
  position: absolute;
  height: 28px;
  width: 28px;
  left: 253px;
  top: 37px;
  cursor: pointer;
`;

export const PlaylistIcon = styled.img`
  position: absolute;
  height: 28px;
  width: 28px;
  left: 356px;
  top: 37px;
  cursor: pointer;
`;

export const PlaylistDot = styled.img`
  width: 6.25px;
  position: absolute;
  left: 362.25px;
  top: 55.06px;
  cursor: pointer;
`;

export const FirstDrumIcon = styled.img`
  height: 428px;
  position: absolute;
  left: 0px;
  top: 5.21px;
  cursor: pointer;
  object-fit: contain;
`;

export const SecondDrumIcon = styled.img`
  height: 428px;
  position: absolute;
  left: 108.88px;
  top: 3.41px;
  cursor: pointer;
`;

export const ThirdDrumIcon = styled.img`
  height: 428px;
  position: absolute;
  left: 213.33px;
  top: 1.46px;
  cursor: pointer;
`;

export const FourthDrumIcon = styled.img`
  height: 428px;
  position: absolute;
  left: 320px;
  top: 1.46px;
  cursor: pointer;
`;
