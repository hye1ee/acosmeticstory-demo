"use client";

import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Title>Acosmeticstory</Title>
      </Link>
    </HeaderContainer>
  );
}
