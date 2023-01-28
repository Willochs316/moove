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
  Text,
  SubText,
  BurnaTitle,
  LojayTitle,
  BurnaContent,
  LojayContent,
} from "./styles/ArtistCard.styled";
import burna from "../assets/png/burna-boy.png";
import lojay from "../assets/png/lojay.png";

const ArtistCard = () => {
  const cards = [
    {
      title: "Daily Vibes 1",
      content: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
      img: `${burna}`,
    },
    {
      title: "Daily Vibes 2",
      content: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
      img: `${lojay}`,
    },
  ];
  return (
    <AppMusicCard>
      <BillboardBanner></BillboardBanner>

      <Title>Welcome Back!</Title>
      <SubTitle>See more</SubTitle>

      <Text>Cheers to the Weekend</Text>
      <SubText>See more</SubText>

      {cards.map((_, index) => (
        <>
          <BurnaCard src={cards[0].img} alt="" />
          <BurnaTitle>{cards[0].title}</BurnaTitle>
          <BurnaContent>{cards[0].content}</BurnaContent>

          <LojayCard src={cards[1].img} alt="" />
          <LojayTitle>{cards[1].title}</LojayTitle>
          <LojayContent>{cards[0].content}</LojayContent>

          <SecondBurnaCard src={cards[0].img} alt="" />

          <SecondLojayCard src={cards[1].img} alt="" />
          <ThirdBurnaCard src={cards[0].img} alt="" />
          <FourthBurnaCard src={cards[0].img} alt="" />
        </>
      ))}
    </AppMusicCard>
  );
};

export default ArtistCard;
