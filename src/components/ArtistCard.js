import React from "react";
import {
  AppMusicCard,
  BillboardBanner,
  BurnaCard,
  LojayCard,
  ThirdBurnaCard,
  SubTitle,
  Title,
  SecondBurnaCard,
  SecondLojayCard,
  FourthBurnaCard,
  Content,
  SubText,
} from "./styles/ArtistCard.styled";
import Burna from "../assets/png/burna-boy.png";
import Lojay from "../assets/png/lojay.png";

const ArtistCard = () => {
  return (
    <AppMusicCard>
      <BillboardBanner></BillboardBanner>

      <Title>Welcome Back!</Title>
      <SubTitle>See more</SubTitle>

      <BurnaCard src={Burna} alt="" />
      <LojayCard src={Lojay} alt="" />
      <SecondBurnaCard src={Burna} alt="" />

      <Content>Cheers to the Weekend</Content>
      <SubText>See more</SubText>

      <SecondLojayCard src={Lojay} alt="" />
      <ThirdBurnaCard src={Burna} alt="" />
      <FourthBurnaCard src={Burna} alt="" />
    </AppMusicCard>
  );
};

export default ArtistCard;
