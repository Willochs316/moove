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
  ThirdBurnaTitle,
  SecondLojayTitle,
  Footer,
} from "./styles/ArtistCard.styled";
import burna from "../assets/png/burna-boy.png";
import lojay from "../assets/png/lojay.png";
import home from "../assets/png/home-icon.png";
import dot from "../assets/png/vector-playlist-dot.png";
import playlist from "../assets/png/vector-playlist-icon.png";
import drum from "../assets/png/mask-drum-group.png";
import eye from "../assets/png/eye-icon.png";
import library from "../assets/png/vector-library.png";
import FooterStyled from "./Footer";

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

  const images = [
    {
      img: `${home}`,
    },

    {
      img: `${eye}`,
    },

    {
      img: `${library}`,
    },

    {
      img: `${playlist}`,
      dot: `${dot}`,
    },

    {
      img: `${drum}`,
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
        <div key={index}>
          <BurnaCard src={cards[0].img} alt="" />
          <BurnaTitle>{cards[0].title}</BurnaTitle>
          <BurnaContent>{cards[0].content}</BurnaContent>

          <LojayCard src={cards[1].img} alt="" />
          <LojayTitle>{cards[1].title}</LojayTitle>
          <LojayContent>{cards[0].content}</LojayContent>

          <SecondBurnaCard src={cards[0].img} alt="" />

          <SecondLojayCard src={cards[1].img} alt="" />
          <ThirdBurnaCard src={cards[0].img} alt="" />

          <ThirdBurnaTitle>{cards[0].title}</ThirdBurnaTitle>

          <SecondLojayTitle>{cards[1].title}</SecondLojayTitle>

          <FourthBurnaCard src={cards[0].img} alt="" />
        </div>
      ))}

      <Footer>
        <FooterStyled images={images} />
      </Footer>
    </AppMusicCard>
  );
};

export default ArtistCard;
