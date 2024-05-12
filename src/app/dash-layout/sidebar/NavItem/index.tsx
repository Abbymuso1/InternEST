import React from "react";
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";
import { width } from "@mui/system";

type NavGroup = {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
}


const NavItem = ({ item, level, onClick }: ItemType) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  const ListItemStyled = styled(ListItem)(() => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "8px 10px",
      borderRadius: "8px",
      backgroundColor: level > 1 ? "transparent !important" : "inherit",
      color: theme.palette.text.secondary,
      paddingLeft: "10px",
      "&:hover": {
        // color: "#ffe0b2",
        color: theme.palette.text.primary,
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: "#ff9100",
        "&:hover": {
          backgroundColor: "#fb8c00",
          color: "white",
        },
      },
    },
    a: {
      textDecoration: "none !important",
    },
  }));

  return (
    <List component="div" disablePadding key={item.id} >
      <ListItemStyled sx={{ width: "100%" }}>
        <Link href={item.href} passHref>
          <ListItemButton
            disabled={item.disabled}
            onClick={onClick}
          >
            <ListItemIcon
              sx={{
                minWidth: "36px",
                p: "3px 0",
                color: "inherit",
              }}
            >
              {itemIcon}
            </ListItemIcon>
            <ListItemText >
              <>{item.title}</>
            </ListItemText>
          </ListItemButton>
        </Link>
      </ListItemStyled>
    </List>


  );
};

export default NavItem;
