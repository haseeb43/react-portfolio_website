import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:haseebahmedzia143@gmail.com">
            haseebahmedzia143@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Inovativing one project at a time</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/haseeb43">
          <AiFillGithub size={"3rem"} />
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/haseeb-569407181/">
          <AiFillLinkedin size={"3rem"} />
        </SocialIcons>

        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size={"3rem"} />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
