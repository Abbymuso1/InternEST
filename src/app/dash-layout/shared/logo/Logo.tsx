import Link from "next/link";
import { Typography, styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Typography height={70} width={174} sx={{p:3}} variant="h3">InternEST</Typography>
      {/* <Image src="/images/logos/dark-logo.svg" alt="logo" height={70} width={174} priority /> */}
    </LinkStyled>
  );
};

export default Logo;
