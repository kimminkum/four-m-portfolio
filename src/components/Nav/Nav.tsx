import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { LinkItems } from "./LinkItems";

interface NavProps {
  position?: string;
}

interface NavContainerProps {
  position?: string;
  toggle: boolean;
}

interface LinksProps {
  toggle: boolean;
}

const NavContainer = styled.nav<NavContainerProps>`
  position: ${(props) => props.position || "static"};
  width: 100%;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: ${(props) => (props.toggle ? "black" : "rgba(0,0,0,0.8)")};
  color: ${(props) => props.theme.lightGray};
  height: 44px;

  @media screen and (max-width: 768px) {
    ${(props) => {
      if (props.toggle) {
        return `
                    height: 100vh;
                    transition: all 0.8s cubic-bezier(.32,.1,.24,.99);
                `;
      } else {
        return `
                    height: 48px;
                    transition: all 0.8s cubic-bezier(.32,.1,.24,.99);
                `;
      }
    }}
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    height: 48px;
    position: relative;
  }
`;

const Logo = styled.div`
  width: 44px;
  height: 44px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmI-9RO8bNvWYgcz_FZGjrqK6iqKv6ga4pQ&s");
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  background-size: cover;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }

  @media screen and (max-width: 768px) {
    height: 48px;
    position: absolute;
    left: 50%;
  }
`;

const CartIcon = styled.div`
  width: 44px;
  height: 44px;
  background-image: url("https://img.lovepik.com/free-png/20210928/lovepik-shopping-cart-icon-png-image_401708259_wh1200.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }

  @media screen and (max-width: 768px) {
    height: 48px;
    position: fixed;
    right: 22px;
  }
`;

const MenuToggle = styled.div`
  display: none;
  position: absolute;
  left: 22px;
  top: 14px;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Links = styled.ul<LinksProps>`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  color: white;

  li {
    padding: 12px 12px;
    opacity: 0.8;
  }

  .link {
    color: ${(props) => props.theme.lightGray};
    opacity: 0.8;
    &:hover {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    position: absolute;
    top: 48px;
    font-size: 15px;
    padding: 12px 0;
    top: ${(props) => (props.toggle ? "48px" : "-500px")};
    transition: all 1s cubic-bezier(0.32, 0.1, 0.24, 0.99);

    li {
      width: 100%;
      border-bottom: 1px solid ${(props) => props.theme.lightGray};
    }
  }
`;

const Nav: React.FC<NavProps> = ({ position }) => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <>
      <NavContainer toggle={clicked} position={position}>
        <Content>
          <MenuToggle onClick={onClick}>
            <FontAwesomeIcon icon={clicked ? faXmark : faBars} />
          </MenuToggle>
          <Link to="/">
            <Logo />
          </Link>
          <Links toggle={clicked}>
            {LinkItems.map((item, index) => (
              <li key={index}>
                <Link className="link" to={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
          </Links>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </Content>
      </NavContainer>
    </>
  );
};

export default Nav;