import React from 'react';
import { BackGroundImg, DivContainer } from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <BackGroundImg>
      <DivContainer>{children}</DivContainer>
    </BackGroundImg>
  );
};

export default Layout;
