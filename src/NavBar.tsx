import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import React, { useEffect } from "react";
import {
  ArrowDropDown,
  Info,
  InfoOutlined,
  PeopleOutline,
} from "@material-ui/icons";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
// import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
      [theme.breakpoints.down(520)]: {
        flexGrow: 1,
        width: "520px",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      marginLeft: "3rem",
      color: theme.palette.secondary.main,
      cursor: "pointer",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
      "&.active": {
        color: theme.palette.primary.contrastText,
      },
    },
    iconButton: {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerButton: {
      marginRight: theme.spacing(2),
      color: theme.palette.secondary.main,
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    fitApiLogo: {
      height: "3rem",
    },
    logout: {
      display: "none",
      marginLeft: "2rem",
      color: theme.palette.secondary.main,
      cursor: "pointer",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  })
);

// eslint-disable-next-line max-len
export default function NavBar({
  drawerStateOpen,
  setDrawerStateOpen,
}: {
  drawerStateOpen: boolean;
  setDrawerStateOpen: (state: boolean) => void;
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {

  }, []);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut = async () => {
    try {
      handleMenuClose();

    } catch (err) {
      console.log(err);
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      getContentAnchorEl={null}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogOut}>
        <ListItemText style={{ marginRight: "1rem" }} primary="Logout" />
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  // @ts-ignore
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      getContentAnchorEl={null}
    >
      <MenuItem onClick={handleLogOut}>
        <ListItemText style={{ marginRight: "1rem" }} primary="Logout" />
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
      </MenuItem>
     
        <ListItemText style={{ marginRight: "1rem" }} primary="Contributors" />
        <ListItemIcon>
          <PeopleOutline />
        </ListItemIcon>
     
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setDrawerStateOpen(!drawerStateOpen)}
            className={classes.drawerButton}
          >
            <MenuIcon />
          </IconButton>
          
            <p>Hello</p>
       

        
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Info fontSize="large" />
              <Typography variant="subtitle2">Account</Typography>
            </Box>
      

      
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <PeopleAltIcon fontSize="large" />
              <Typography variant="subtitle2">Contributors</Typography>
            </Box>
      
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              aria-controls={menuId}
              color="primary"
              size="large"
              onClick={handleProfileMenuOpen}
              className={classes.iconButton}
              variant="outlined"
              startIcon={<AccountCircle />}
              endIcon={<ArrowDropDown />}
            >
              "supun sandaruwan"
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              className={classes.iconButton}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
