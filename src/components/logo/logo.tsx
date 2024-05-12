import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';



// ----------------------------------------------------------------------

function Logo({ single = false, sx }) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const singleLogo = (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="534.667" height="440" viewBox="0 0 401 330">
      <path fill={PRIMARY_MAIN} d="M193.9 4.3c-19.5 5.5-29.7 25.5-22.8 44.4C175.4 60.4 188.9 70 201 70h5v43h-3.7c-5.5 0-18.1 4.1-26 8.5-3.7 2.1-9.9 6.9-13.7 10.7l-6.8 6.8H138v-4.4c0-7.4-.6-7.6-20.6-7.6H100v-2.4c0-4.2-1.9-4.7-15.6-4.4l-12.9.3-.3 54.4c-.1 39.3.1 54.8.9 55.7 1.5 1.9 24.9 2 26.7.2.7-.7 1.2-3.9 1.2-7.5V217h18c20.1 0 20 0 20-7.4 0-3.5.1-3.6 3.9-3.6 3 0 6.7 1.7 17.7 8.3 22.3 13.3 24.7 14.6 31.5 16.3 7.4 1.9 16.4 1.3 24-1.5 5.5-2.1 86.6-59.7 89.9-63.8 4.6-5.9.3-14.1-10.3-19.3-7.2-3.5-15.1-4.2-22.7-1.9-4.3 1.3-4.4 1.3-6.4-1.6-11.3-15.9-29.4-27.2-47-29.4-5-.6-5.1-.7-5.4-4.1-.3-3.3.1-3.7 5-6.7 8.3-5 8.6-5 11.9-1 3.9 4.8 11.1 7.2 16.7 5.7 4.6-1.2 19.5-10.8 26.1-16.7 3.2-2.8 4.3-4.4 3.8-5.7-.8-2-12.7-7.6-23.9-11.3-6-2-8.6-2.4-12.3-1.9-7.9 1.2-15.5 9.7-15.5 17.3 0 2.7-1.4 3.8-11.2 8.1-.5.2-.8-5.7-.8-13.1V70.2l6.3-.4c12-.7 22.4-8 27.8-19.3 2.4-4.9 2.9-7.3 2.9-13.2 0-13.9-6.5-24.4-18.7-30.5-6.4-3.1-7.3-3.3-19.7-3.5-8.4-.2-14.7.2-17.7 1m32.4 7.1c12.9 4.6 20.3 19.3 16.4 32.7-2 6.7-7.9 13.9-14 16.8-5.3 2.6-16.6 2.9-22 .6-8.2-3.4-14.8-12.2-16.2-21.5-1.8-12.2 5.9-24.4 18-28.8 4.2-1.5 13.3-1.4 17.8.2m-34.1 3.3c-10.7 13.7-11 31-.6 43.1 4.2 5 2.8 5.4-3.8 1.3-8.2-5.2-12.2-12.6-12.2-22.5.1-10.1 5.3-18.9 14.3-23.6 5.2-2.8 5.6-2.5 2.3 1.7m62.2 65.8c4.4 1.9 3.6 3.4-1.9 3.5-1.6.1-6.9 1.1-11.7 2.4-8.5 2.1-8.8 2.1-8.8.3 0-1 1.6-3.5 3.5-5.4 3.4-3.4 3.8-3.5 9.3-3.1 3.1.3 7.5 1.3 9.6 2.3m7.6 9.4c0 2.1-15.6 11.1-19.2 11.1-2.6 0-8.8-3.5-8.8-5s14-5.1 27.3-6.9c.4-.1.7.3.7.8m-39.5 30.6c3.9.8 10.3 3.1 14.3 5.1 7.6 3.9 19.4 13.9 22.5 19.2l1.7 3-24.2 8.1c-13.4 4.5-24.9 8.1-25.7 8.1s-6.6-5.1-13-11.3c-12.8-12.4-15.2-13.7-26-13.7-3.3 0-6.1-.4-6.1-.9 0-3.8 21.6-16 31.5-17.9 7.5-1.5 17.2-1.3 25 .3M93 176v49H77v-98h16zm38-4v38h-31v-76h31zm48.5-25.9c3 .9 7.1 4.2 17.8 14.8 16.9 16.5 18.8 19.9 15.1 27.7-2.1 4.3-5.9 6.4-12 6.4-4.6 0-4.7-.1-17.8-13-7.3-7.2-14-13-14.9-13-.8 0-1.9 1-2.2 2.1-.6 1.8 1.4 4.3 11.6 14.6 6.8 6.8 13.7 13.1 15.2 13.9s4.9 1.7 7.5 2c6.5.8 14.8-3.4 17.9-9.1 3-5.3 3.1-13.6.2-18.9-1.1-2.1-1.9-3.9-1.7-4.1 1.3-1.1 63.2-20.5 65.5-20.5 7.8 0 18.8 6.9 18.1 11.4-.2 1.3-3.8 4.5-9.3 8.5C211.3 226 212.8 225 200 225c-9.4 0-13.1-1.6-35-14.8-15.9-9.6-19-11.2-22.7-11.2H138v-54h18.8c10.5 0 20.4.5 22.7 1.1" />
      <path fill="currentColor" d="M116.3 188c-3 1.2-4.6 4.5-3.8 8.1.8 3.3 3.1 4.9 7.3 4.9 6.1 0 8.6-8 3.6-11.9-2.9-2.3-3.8-2.4-7.1-1.1m26.8-130.6c-.6.7-.9 2.1-.5 3 .9 2.3 20.2 2.4 21 .1.4-.8.1-2.2-.6-3-1.7-2-18.2-2.1-19.9-.1m17.3 15.8c-5.1 4.9-6.4 6.7-6.2 8.7.5 4.4 3.4 3.6 9.8-2.5 6.3-6 8.3-9.9 5.9-11.5-2.3-1.4-2.8-1.2-9.5 5.3m16.3 2.5c-.4.3-.7 4.8-.7 10 0 7.7.3 9.5 1.6 10 3.6 1.4 4.9-1 5.2-9.7.2-5.2-.1-8.7-.9-9.6-1.2-1.5-4.1-1.9-5.2-.7M3 295.5V328h8v-65H3zm250 0V328h39v-7h-32v-23h26v-6h-26v-22h32v-7h-39zm61.4-30.6c-11.9 5.4-14 21.8-3.7 28.4 2.1 1.4 7.4 3.7 11.9 5.1 9.8 3.2 12.9 6 12.8 11.6-.3 11.3-13.5 15.6-25.4 8.2l-4.9-3.1-2.1 2.6-2 2.5 2.3 1.8c4.4 3.5 9.2 5.3 15.3 5.8 14.5 1.1 23.4-6.3 23.4-19.7 0-9.2-4-13-19.2-18-3.6-1.2-7.8-3.4-9.2-4.8-4.8-4.7-2.8-12.1 4-14.9 4.9-2.1 9.4-1.7 15 1.1 6 3 5.8 3 7.2.1.9-2 .7-2.7-.7-4-5-4.5-17.6-5.9-24.7-2.7m34.6 1.6v3.5h21v58h8v-58h21v-7h-50zm-264.5 4.2c-2.1 12.6-1.7 11.8-5.8 12.1-3.1.3-3.7.7-3.7 2.7s.6 2.4 3.8 2.7l3.7.3.5 17.3.5 17.4 2.8 2.4c3.4 2.9 9.2 3.2 14.3.8 2.9-1.4 3.2-1.9 2.3-3.6-1-1.9-2.7-2-7.3-.2-.9.3-2.5-.5-4.1-2-2.5-2.5-2.5-2.8-2.5-17.6v-15h14v-6H89v-7.5c0-6.8-.2-7.5-2-7.5-1.4 0-2.1.9-2.5 3.7M29 304.9V328h6v-16.1c0-8.8.4-16.9 1-17.9 2.7-5 13.5-8 18.8-5.1 3.6 1.9 4.2 5.1 4.2 22.7V328h7v-17c0-12.2-.4-18-1.4-20.3-4.3-10.1-17.2-11.7-26.3-3.4-2.6 2.3-2.5 2.3-3.9-1.8-.6-2-1.7-3.1-3.2-3.3l-2.2-.3zm93.4-20.4c-8.5 4.2-12.6 13.3-10.9 24.2 1.3 8.7 5.6 14.8 12.7 17.8 6.9 2.8 17.8 1.5 23.2-2.9 2.4-1.9 2.5-2.3 1.3-4-1.3-1.8-1.5-1.8-5.8.4-11.3 5.8-23.1.6-24.6-10.8l-.6-4.2h16.2c18.4 0 18.2.1 16.2-8.2-1.5-6.6-4.5-10.6-9.5-12.9-5.8-2.6-12.2-2.4-18.2.6m17.4 5.2c2.2 1.3 5.2 6.8 5.2 9.3 0 .6-4.9 1-13.5 1-7.4 0-13.5-.2-13.5-.5 0-1.7 3-7.3 4.8-8.9 4.1-3.6 12.1-4.1 17-.9m23.2 15.2V328h7v-31l3.4-3.8c3.3-3.5 3.8-3.7 9.4-3.7 6 .1 6 0 6.5-3 .5-3.5-.6-4.5-5.1-4.5-4.6 0-8.7 2.4-11.6 6.7-2.7 3.9-3.3 3.5-3.8-2.7-.3-3-.7-3.5-3-3.8l-2.8-.3zm37 0V328h7v-33.8l3-2.6c6.1-5.1 13.9-5.5 18.2-.9 2.2 2.3 2.3 3.2 2.6 19.9l.3 17.4h7.1l-.4-17.8c-.4-19.7-1.2-22.6-7.1-26.2-5.7-3.5-15.7-2.1-20.1 2.9-2.7 3-4.4 2.6-4.8-1.2-.2-2.7-.8-3.3-3-3.5l-2.8-.3z" />
    </svg>
  );

  const fullLogo = (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="534.667" height="440" viewBox="0 0 401 330">
      <path fill={PRIMARY_MAIN} d="M193.9 4.3c-19.5 5.5-29.7 25.5-22.8 44.4C175.4 60.4 188.9 70 201 70h5v43h-3.7c-5.5 0-18.1 4.1-26 8.5-3.7 2.1-9.9 6.9-13.7 10.7l-6.8 6.8H138v-4.4c0-7.4-.6-7.6-20.6-7.6H100v-2.4c0-4.2-1.9-4.7-15.6-4.4l-12.9.3-.3 54.4c-.1 39.3.1 54.8.9 55.7 1.5 1.9 24.9 2 26.7.2.7-.7 1.2-3.9 1.2-7.5V217h18c20.1 0 20 0 20-7.4 0-3.5.1-3.6 3.9-3.6 3 0 6.7 1.7 17.7 8.3 22.3 13.3 24.7 14.6 31.5 16.3 7.4 1.9 16.4 1.3 24-1.5 5.5-2.1 86.6-59.7 89.9-63.8 4.6-5.9.3-14.1-10.3-19.3-7.2-3.5-15.1-4.2-22.7-1.9-4.3 1.3-4.4 1.3-6.4-1.6-11.3-15.9-29.4-27.2-47-29.4-5-.6-5.1-.7-5.4-4.1-.3-3.3.1-3.7 5-6.7 8.3-5 8.6-5 11.9-1 3.9 4.8 11.1 7.2 16.7 5.7 4.6-1.2 19.5-10.8 26.1-16.7 3.2-2.8 4.3-4.4 3.8-5.7-.8-2-12.7-7.6-23.9-11.3-6-2-8.6-2.4-12.3-1.9-7.9 1.2-15.5 9.7-15.5 17.3 0 2.7-1.4 3.8-11.2 8.1-.5.2-.8-5.7-.8-13.1V70.2l6.3-.4c12-.7 22.4-8 27.8-19.3 2.4-4.9 2.9-7.3 2.9-13.2 0-13.9-6.5-24.4-18.7-30.5-6.4-3.1-7.3-3.3-19.7-3.5-8.4-.2-14.7.2-17.7 1m32.4 7.1c12.9 4.6 20.3 19.3 16.4 32.7-2 6.7-7.9 13.9-14 16.8-5.3 2.6-16.6 2.9-22 .6-8.2-3.4-14.8-12.2-16.2-21.5-1.8-12.2 5.9-24.4 18-28.8 4.2-1.5 13.3-1.4 17.8.2m-34.1 3.3c-10.7 13.7-11 31-.6 43.1 4.2 5 2.8 5.4-3.8 1.3-8.2-5.2-12.2-12.6-12.2-22.5.1-10.1 5.3-18.9 14.3-23.6 5.2-2.8 5.6-2.5 2.3 1.7m62.2 65.8c4.4 1.9 3.6 3.4-1.9 3.5-1.6.1-6.9 1.1-11.7 2.4-8.5 2.1-8.8 2.1-8.8.3 0-1 1.6-3.5 3.5-5.4 3.4-3.4 3.8-3.5 9.3-3.1 3.1.3 7.5 1.3 9.6 2.3m7.6 9.4c0 2.1-15.6 11.1-19.2 11.1-2.6 0-8.8-3.5-8.8-5s14-5.1 27.3-6.9c.4-.1.7.3.7.8m-39.5 30.6c3.9.8 10.3 3.1 14.3 5.1 7.6 3.9 19.4 13.9 22.5 19.2l1.7 3-24.2 8.1c-13.4 4.5-24.9 8.1-25.7 8.1s-6.6-5.1-13-11.3c-12.8-12.4-15.2-13.7-26-13.7-3.3 0-6.1-.4-6.1-.9 0-3.8 21.6-16 31.5-17.9 7.5-1.5 17.2-1.3 25 .3M93 176v49H77v-98h16zm38-4v38h-31v-76h31zm48.5-25.9c3 .9 7.1 4.2 17.8 14.8 16.9 16.5 18.8 19.9 15.1 27.7-2.1 4.3-5.9 6.4-12 6.4-4.6 0-4.7-.1-17.8-13-7.3-7.2-14-13-14.9-13-.8 0-1.9 1-2.2 2.1-.6 1.8 1.4 4.3 11.6 14.6 6.8 6.8 13.7 13.1 15.2 13.9s4.9 1.7 7.5 2c6.5.8 14.8-3.4 17.9-9.1 3-5.3 3.1-13.6.2-18.9-1.1-2.1-1.9-3.9-1.7-4.1 1.3-1.1 63.2-20.5 65.5-20.5 7.8 0 18.8 6.9 18.1 11.4-.2 1.3-3.8 4.5-9.3 8.5C211.3 226 212.8 225 200 225c-9.4 0-13.1-1.6-35-14.8-15.9-9.6-19-11.2-22.7-11.2H138v-54h18.8c10.5 0 20.4.5 22.7 1.1" />
      <path fill="currentColor" d="M116.3 188c-3 1.2-4.6 4.5-3.8 8.1.8 3.3 3.1 4.9 7.3 4.9 6.1 0 8.6-8 3.6-11.9-2.9-2.3-3.8-2.4-7.1-1.1m26.8-130.6c-.6.7-.9 2.1-.5 3 .9 2.3 20.2 2.4 21 .1.4-.8.1-2.2-.6-3-1.7-2-18.2-2.1-19.9-.1m17.3 15.8c-5.1 4.9-6.4 6.7-6.2 8.7.5 4.4 3.4 3.6 9.8-2.5 6.3-6 8.3-9.9 5.9-11.5-2.3-1.4-2.8-1.2-9.5 5.3m16.3 2.5c-.4.3-.7 4.8-.7 10 0 7.7.3 9.5 1.6 10 3.6 1.4 4.9-1 5.2-9.7.2-5.2-.1-8.7-.9-9.6-1.2-1.5-4.1-1.9-5.2-.7M3 295.5V328h8v-65H3zm250 0V328h39v-7h-32v-23h26v-6h-26v-22h32v-7h-39zm61.4-30.6c-11.9 5.4-14 21.8-3.7 28.4 2.1 1.4 7.4 3.7 11.9 5.1 9.8 3.2 12.9 6 12.8 11.6-.3 11.3-13.5 15.6-25.4 8.2l-4.9-3.1-2.1 2.6-2 2.5 2.3 1.8c4.4 3.5 9.2 5.3 15.3 5.8 14.5 1.1 23.4-6.3 23.4-19.7 0-9.2-4-13-19.2-18-3.6-1.2-7.8-3.4-9.2-4.8-4.8-4.7-2.8-12.1 4-14.9 4.9-2.1 9.4-1.7 15 1.1 6 3 5.8 3 7.2.1.9-2 .7-2.7-.7-4-5-4.5-17.6-5.9-24.7-2.7m34.6 1.6v3.5h21v58h8v-58h21v-7h-50zm-264.5 4.2c-2.1 12.6-1.7 11.8-5.8 12.1-3.1.3-3.7.7-3.7 2.7s.6 2.4 3.8 2.7l3.7.3.5 17.3.5 17.4 2.8 2.4c3.4 2.9 9.2 3.2 14.3.8 2.9-1.4 3.2-1.9 2.3-3.6-1-1.9-2.7-2-7.3-.2-.9.3-2.5-.5-4.1-2-2.5-2.5-2.5-2.8-2.5-17.6v-15h14v-6H89v-7.5c0-6.8-.2-7.5-2-7.5-1.4 0-2.1.9-2.5 3.7M29 304.9V328h6v-16.1c0-8.8.4-16.9 1-17.9 2.7-5 13.5-8 18.8-5.1 3.6 1.9 4.2 5.1 4.2 22.7V328h7v-17c0-12.2-.4-18-1.4-20.3-4.3-10.1-17.2-11.7-26.3-3.4-2.6 2.3-2.5 2.3-3.9-1.8-.6-2-1.7-3.1-3.2-3.3l-2.2-.3zm93.4-20.4c-8.5 4.2-12.6 13.3-10.9 24.2 1.3 8.7 5.6 14.8 12.7 17.8 6.9 2.8 17.8 1.5 23.2-2.9 2.4-1.9 2.5-2.3 1.3-4-1.3-1.8-1.5-1.8-5.8.4-11.3 5.8-23.1.6-24.6-10.8l-.6-4.2h16.2c18.4 0 18.2.1 16.2-8.2-1.5-6.6-4.5-10.6-9.5-12.9-5.8-2.6-12.2-2.4-18.2.6m17.4 5.2c2.2 1.3 5.2 6.8 5.2 9.3 0 .6-4.9 1-13.5 1-7.4 0-13.5-.2-13.5-.5 0-1.7 3-7.3 4.8-8.9 4.1-3.6 12.1-4.1 17-.9m23.2 15.2V328h7v-31l3.4-3.8c3.3-3.5 3.8-3.7 9.4-3.7 6 .1 6 0 6.5-3 .5-3.5-.6-4.5-5.1-4.5-4.6 0-8.7 2.4-11.6 6.7-2.7 3.9-3.3 3.5-3.8-2.7-.3-3-.7-3.5-3-3.8l-2.8-.3zm37 0V328h7v-33.8l3-2.6c6.1-5.1 13.9-5.5 18.2-.9 2.2 2.3 2.3 3.2 2.6 19.9l.3 17.4h7.1l-.4-17.8c-.4-19.7-1.2-22.6-7.1-26.2-5.7-3.5-15.7-2.1-20.1 2.9-2.7 3-4.4 2.6-4.8-1.2-.2-2.7-.8-3.3-3-3.5l-2.8-.3z" />
    </svg>

  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
};

export default memo(Logo);
