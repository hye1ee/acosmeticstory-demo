"use client";

import Image from "next/image";
import styled from "styled-components";
import { BookOpen, Layout, Globe } from "lucide-react";

const Container = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  padding: 2rem;
  padding-bottom: 5rem;
  gap: 4rem;
  font-family: var(--font-geist-sans);

  @media (min-width: 640px) {
    padding: 5rem;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  grid-row-start: 2;
  align-items: center;

  @media (min-width: 640px) {
    align-items: flex-start;
  }
`;

const Logo = styled(Image)`
  filter: invert(0);
  @media (prefers-color-scheme: dark) {
    filter: invert(1);
  }
`;

const Instructions = styled.ol`
  list-style-position: inside;
  list-style-type: decimal;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;
  font-family: var(--font-geist-mono);

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const InstructionItem = styled.li`
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const Code = styled.code`
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-family: var(--font-geist-mono);
  font-weight: 600;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 9999px;
  background-color: #000;
  color: #fff;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #383838;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #ccc;
    }
  }

  @media (min-width: 640px) {
    padding: 0.75rem 1.25rem;
  }
`;

const SecondaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  font-weight: 500;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background-color: #f2f2f2;
    border-color: transparent;
  }

  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.145);
    &:hover {
      background-color: #1a1a1a;
    }
  }

  @media (min-width: 640px) {
    padding: 0.75rem 1.25rem;
    width: auto;
  }

  @media (min-width: 768px) {
    width: 158px;
  }
`;

const Footer = styled.footer`
  grid-row-start: 3;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export default function Home() {
  return (
    <Container>
      <MainContent>
        <Logo
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Instructions>
          <InstructionItem>
            Get started by editing <Code>src/app/page.tsx</Code>.
          </InstructionItem>
          <InstructionItem>
            Save and see your changes instantly.
          </InstructionItem>
        </Instructions>

        <ButtonContainer>
          <PrimaryButton
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </PrimaryButton>
          <SecondaryButton
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </SecondaryButton>
        </ButtonContainer>
      </MainContent>
      <Footer>
        <FooterLink
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookOpen size={16} />
          Learn
        </FooterLink>
        <FooterLink
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Layout size={16} />
          Examples
        </FooterLink>
        <FooterLink
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe size={16} />
          Go to nextjs.org →
        </FooterLink>
      </Footer>
    </Container>
  );
}
