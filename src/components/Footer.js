import React from "react";
import {
  EyeIcon,
  FirstDrumIcon,
  FourthDrumIcon,
  HomeIcon,
  LibraryIcon,
  PlaylistDot,
  PlaylistIcon,
  SecondDrumIcon,
  ThirdDrumIcon,
} from "./styles/ArtistCard.styled";

const FooterStyled = ({ images }) => {
  return (
    <>
      {images.map((_, index) => (
        <div key={index}>
          <HomeIcon src={images[0].img} alt="" />
          <EyeIcon src={images[1].img} alt="" />
          <LibraryIcon src={images[2].img} alt="" />
          <PlaylistIcon src={images[3].img} alt="" />
          <PlaylistDot src={images[3].dot} alt="" />
          <FirstDrumIcon src={images[4].img} alt="" />
          <SecondDrumIcon src={images[4].img} alt="" />
          <ThirdDrumIcon src={images[4].img} alt="" />
          <FourthDrumIcon src={images[4].img} alt="" />
        </div>
      ))}
    </>
  );
};

export default FooterStyled;
