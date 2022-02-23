import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

interface Props {
    selectedOption?: ((opt: string) => void) | undefined;
    paperProps?: {};
    variant?: "permanent" | "persistent" | "temporary" | undefined;
    open?: boolean;
    onClose?: () => void;
    sx?: {};
    active: string;
    signOut: ()=>void;
}

const Navigator: React.FC<Props> = ({ selectedOption, paperProps, variant, open, onClose, sx, active,signOut }) => {
    const handleClick = (id: string) => {
        if (id == 'Search Product') {
            if (selectedOption) selectedOption(id);
        }
        if (id == 'Add Product') {
            if (selectedOption) selectedOption(id);
        }
        if (id == 'View Products') {
            if (selectedOption) selectedOption(id);
        }
    };

    const handleSignOut = () => {
        if(signOut) signOut();
    };

    return (
        <Drawer variant={variant ? variant : "permanent"} PaperProps={paperProps} open={open} onClose={onClose} sx={sx} >
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    Admin Module
                </ListItem>
                <ListItem sx={{ ...item, ...itemCategory }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Project Overview</ListItemText>
                </ListItem>
                <Box sx={{ bgcolor: '#101F33' }}>
                    <ListItem sx={{ py: 2, px: 3 }}>
                        <ListItemText sx={{ color: '#fff' }}>{'Options'}</ListItemText>
                    </ListItem>
                    <ListItem disablePadding onClick={() => handleClick('Add Product')} >
                        <ListItemButton selected={active == 'Add Product' ? true : false} sx={item}>
                            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                            <ListItemText>{'Add Product'}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    {/* <ListItem disablePadding onClick={() => handleClick('Search Product')}>
                        <ListItemButton selected={active == 'Search Product' ? true : false} sx={item}>
                            <ListItemIcon>{<DnsRoundedIcon />}</ListItemIcon>
                            <ListItemText>{'Search Product'}</ListItemText>
                        </ListItemButton>
    </ListItem>*/}
                    <ListItem disablePadding onClick={() => handleClick('View Products')}>
                        <ListItemButton selected={active == 'View Products' ? true : false} sx={item}>
                            <ListItemIcon>{<PermMediaOutlinedIcon />}</ListItemIcon>
                            <ListItemText>{'Products'}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Box>
                <ListItem disablePadding sx={{ ...item, ...itemCategory }} onClick={handleSignOut}>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText>Sign Out</ListItemText>
                    </ListItemButton>

                </ListItem>
            </List>
        </Drawer>
    );
};

export default Navigator;