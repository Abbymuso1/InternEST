'use client';

import PropTypes from 'prop-types';
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return <MainLayout headerOnDark>{children}</MainLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};