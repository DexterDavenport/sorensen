import React from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import HandymanIcon from '@mui/icons-material/Handyman';
import InfoIcon from '@mui/icons-material/Info';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link } from "react-router-dom";


const DRAWER_WIDTH: number = 240;

function ContactUs(): JSX.Element {
    return (
        <Container sx={{ marginY: 3 }}>
            <Stack minWidth="100%" width={DRAWER_WIDTH} direction="row" justifyContent="space-between" my={2}>
                {/* <MoneyOffIcon /> */}
                <Typography variant="subtitle1">801.687.1521</Typography>
            </Stack>

            <Stack width={DRAWER_WIDTH} direction="row" justifyContent="space-between" my={2}>
                {/* <EmailIcon /> */}
                <Typography variant="subtitle1">sorensenlawassociates@gmail.com</Typography>
            </Stack>

            <Stack width={DRAWER_WIDTH} direction="row" justifyContent="space-between" my={2}>
                {/* <InfoIcon /> */}
                <Typography variant="subtitle1" textAlign="right">Sorensen Law & Associates
3210 N Canyon Road, Suite 201
Provo, Utah 84604</Typography>
            </Stack>
        </Container>
    );
}

type NavButtonProps = {
    color: string;
    children: string;
    link: string;
    active?: boolean;
};
  
class TabButton extends React.Component<NavButtonProps> {
    public render(): JSX.Element {
      return (
        <Button component={Link} to={this.props.link} key={this.props.children} sx={{
          fontWeight: 500,
          color: this.props.color,
          position: 'relative',
  
          '&:before': {
            content: "''",
            position: 'absolute',
            width: this.props.active ? '100%' : 0,
            height: '2px',
            bottom: 0,
            backgroundColor: this.props.color,
            visibility: this.props.active ? 'visible' : 'hidden',
            transition: 'all 0.1s ease-in-out',
          },
  
          '&:hover:before': {
            visibility: 'visible',
            width: '100%',
          },
        }}>
          {this.props.children}
        </Button>
      );
    }
  }

type PopoverTabProps = {
    backgroundColor: string;
    color: string;
    children: string;
};

type PopoverTabState = {
    anchorEl?: HTMLButtonElement;
};

class PopoverTab extends React.Component<PopoverTabProps> {
    public state: PopoverTabState = {
        anchorEl: undefined,
    };

    constructor(props: PopoverTabProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    private handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
        this.setState({ anchorEl: event.currentTarget });
      };

    private handleClose(): void {
        this.setState({ anchorEl: undefined });
    }

    public render(): JSX.Element {
        const open: boolean = Boolean(this.state.anchorEl);
        const id: string | undefined = open ? 'simple-popover' : undefined;

        return (
            <>
                <Button aria-describedby={id} variant="contained" onClick={this.handleClick} sx={{
                    backgroundColor: this.props.backgroundColor,
                    color: this.props.color,
                }}>
                    {this.props.children}
                </Button>

                <Popover id={id} open={open} anchorEl={this.state.anchorEl} onClose={this.handleClose} 
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    anchorOrigin={{ 
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <ContactUs />
                </Popover>
            </>
        );
    }
}

export type Tab = {
    title: string;
    link: string;
};

type NavbarProps = {
    tabs: Tab[];
    transparent: boolean;
};

type NavbarState = {
    drawerOpen: boolean;
};

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export class Navbar extends React.Component<NavbarProps> {
    public state: NavbarState = { drawerOpen: false };

    constructor(props: NavbarProps) {
        super(props);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    private toggleDrawer(): void {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    public render(): JSX.Element {
        const elevation: number = this.props.transparent ? 0 : 3;
        const backgroundColor: 'primary' | 'transparent' = this.props.transparent ? 'transparent' : 'primary';
        const textColor: string = 'white';
        const containedBackgroundColor: string = this.props.transparent ? 'primary' : 'white';
        const containedTextColor: string = this.props.transparent ? 'primary.contrastText' : '#086788';

        return (
            <>
                <AppBar position="fixed" color={backgroundColor} elevation={elevation} sx={{ paddingY: 2, transition: '0.1s' }}>
                    <Container>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6" color="white">
                                
                            </Typography>

                            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'block' }}}>
                                {
                                    this.props.tabs.map((tab: Tab): JSX.Element => (
                                        <TabButton link={tab.link} color={textColor}>{tab.title}</TabButton>
                                    ))
                                }
                                
                                <PopoverTab backgroundColor={containedBackgroundColor} color={containedTextColor}>
                                    Contact Us
                                </PopoverTab>
                            </Stack>

                            <Stack direction="row" spacing={3} sx={{ display: { xs: 'block', md: 'none' }}}>
                                <IconButton onClick={this.toggleDrawer}>
                                    <MenuIcon sx={{ color: 'white' }} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Container>
                </AppBar>

                <Drawer anchor="right" open={this.state.drawerOpen} onClose={this.toggleDrawer} sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: DRAWER_WIDTH,
                        boxSizing: 'border-box',
                    },
                }}>
                    <DrawerHeader>
                        <IconButton onClick={this.toggleDrawer}>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </DrawerHeader>

                    <Divider />

                    <List disablePadding>
                        {this.props.tabs.map((tab: Tab, index: number): JSX.Element => (
                            <ListItem key={tab.title} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <MoneyOffIcon /> : <HandymanIcon />}
                                    </ListItemIcon>
                                    
                                    <ListItemText primary={tab.title} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </>
        );
    }
}