"use client";

import styled from "styled-components";

const BodyWrapper = styled.div`
  font-family: var(--font-geist-sans), var(--font-geist-mono);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Main = styled.main`
  padding-top: 4rem;
`;

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BodyWrapper>
      <Main>{children}</Main>
    </BodyWrapper>
  );
}
