import { Logo, Nav, StyledHeader } from "./styles/Header.styled";
import profile from "../assets/png/profile.png";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src={profile} alt="profile image" />
      </Nav>
    </StyledHeader>
  );
};

export default Header;
