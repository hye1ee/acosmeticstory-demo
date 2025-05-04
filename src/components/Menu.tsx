"use client";

import { useState } from "react";
import styled from "styled-components";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 40;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 35;
  opacity: 0;
  animation: fadeIn 0.3s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MenuPanel = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 20rem;
  background-color: white;
  z-index: 40;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const MenuContent = styled.div`
  padding: 1.5rem;
  padding-top: 5rem;
`;

const CloseButton = styled(MenuButton)`
  left: auto;
  right: 1rem;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const MenuItem = styled.div<{ isActive?: boolean }>`
  a {
    display: block;
    font-size: 1.25rem;
    transition: color 0.2s;
    font-weight: 500;
    color: ${(props) => (props.isActive ? "blue" : "inherit")};

    &:hover {
      color: #4b5563;
    }
  }
`;

const menuItems = [
  { name: "Object Holder", path: "/object-holder" },
  { name: "Core Capsule", path: "/core-capsule" },
  { name: "Tools", path: "/tools" },
  { name: "My Story", path: "/my-story" },
  { name: "Stories", path: "/stories" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <MenuIcon size={24} />
      </MenuButton>

      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}

      <MenuPanel isOpen={isOpen}>
        <MenuContent>
          <CloseButton onClick={() => setIsOpen(false)}>
            <X size={24} />
          </CloseButton>
          <nav>
            <MenuList>
              {menuItems.map((item) => (
                <MenuItem key={item.path} isActive={pathname === item.path}>
                  <Link href={item.path} onClick={handleMenuClick}>
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </nav>
        </MenuContent>
      </MenuPanel>
    </>
  );
}
