import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// icons
import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';

// ----------------------------------------------------------------------
interface IconifyProps {
  icon: string;
  sx?: SxProps;
  width: number;
}

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }: IconifyProps, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

export default Iconify;
