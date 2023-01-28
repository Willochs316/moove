import styled from "styled-components";
import myBannerImage from "../../assets/png/header-banner.png";

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

export const BurnaCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 278px;
  left: 15px;
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

export const SecondLojayCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 570px;
  right: 30.87px;
`;

export const ThirdBurnaCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 570px;
  left: 15px;
  z-index: 1;
`;
export const FourthBurnaCard = styled.img`
  height: 228.0465545654297px;
  width: 181.1341094970703px;
  position: absolute;
  top: 570px;
  left: 410px;
  z-index: 1;
`;
