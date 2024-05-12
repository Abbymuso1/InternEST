import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import { IconListCheck, IconMail, IconUser } from "@tabler/icons-react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { Link } from 'react-router-dom';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#FA541C',
    },
  },
});

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src="../../../assets/images/profile/user-1.jpg"
          alt="image"
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "200px",
          },
        }}
      >
        <MenuItem component="div">
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText><Link href="/editProfile" style={linkStyle}>My Profile</Link></ListItemText>
        </MenuItem>
        <MenuItem component="div">
          <ListItemIcon>
            <VerifiedUserOutlinedIcon width={20} />
          </ListItemIcon>
          <ListItemText> <Link href="/applied" style={linkStyle}>Applied</Link></ListItemText>
        </MenuItem>
        <MenuItem component="div">
          <ListItemIcon>
            <HomeOutlinedIcon width={20} />
          </ListItemIcon>
          <ListItemText><Link href="/" style={linkStyle}>Home</Link></ListItemText>
        </MenuItem>

        <Box mt={1} py={1} px={2}>
          <ThemeProvider theme={buttonTheme}>
            <Button
              href="/auth/login"
              variant="outlined"
              color="primary"
              component={Link}
              fullWidth
            >
              Logout
            </Button>
          </ThemeProvider>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
