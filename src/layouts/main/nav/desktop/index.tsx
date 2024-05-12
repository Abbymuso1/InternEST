import Stack from '@mui/material/Stack';

import NavList from './nav-list';

// ----------------------------------------------------------------------

interface NavDesktopProps {
    data: { title: string }[];
    sx: React.CSSProperties;
    [key: string]: any;
}

const NavDesktop: React.FC<NavDesktopProps> = ({ data, sx, ...other }) => {
    return (
        <Stack
            component="nav"
            direction="row"
            spacing={5}
            sx={{
                height: 1,
                ...sx,
            }}
            {...other}
        >
            {data.map((list) => (
                <NavList key={list.title} data={list} />
            ))}
        </Stack>
    );
};

export default NavDesktop;


