import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Header from './header';
import Footer from './footer';
import { HEADER } from '../config-layout';

interface MainLayoutProps {
  children: ReactNode;
  headerOnDark?: boolean;
  disabledSpacing?: boolean;
  sx?: object;
}

const MainLayout: FC<MainLayoutProps> = ({
  children,
  headerOnDark = false,
  disabledSpacing = false,
  sx,
  ...other
}) => {
  return (
    <Box
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      <Header headerOnDark={headerOnDark} />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {!(disabledSpacing || headerOnDark) && (
          <Box
            sx={{
              height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
            }}
          />
        )}

        {children}
      </Box>

      <Footer />
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
  disabledSpacing: PropTypes.bool,
  headerOnDark: PropTypes.bool,
  sx: PropTypes.object,
};

export default MainLayout;