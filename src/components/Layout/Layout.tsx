import React, { useState } from 'react';
import { BackGroundImg, DivContainer } from './Layout.styles';
import { Navbar } from '../Navbar';
import { Menu } from '../Navbar/Menu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <BackGroundImg>
      <DivContainer>
        <Navbar toggleDrawer={setOpenDrawer} />
        <Menu open={openDrawer} toggleDrawer={setOpenDrawer} />
        {children}
      </DivContainer>
    </BackGroundImg>
  );
};

export default Layout;
