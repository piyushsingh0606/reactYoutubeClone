import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import InputBase from "@material-ui/core/InputBase";
import YouTubeIcon from '@material-ui/icons/YouTube';
import TvTwoToneIcon from '@material-ui/icons/TvTwoTone';

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MusicNoteTwoToneIcon from '@material-ui/icons/MusicNoteTwoTone';
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import MoreIcon from "@material-ui/icons/MoreVert";

import Divider from "@material-ui/core/Divider";

import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.main,
    boxShadow: "unset",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.secondary.main,
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
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [youtubeApps, setYoutubeApps] = React.useState(null)


  const isAppsOpen = Boolean(youtubeApps);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleAppsMenuClose = () => {
    setYoutubeApps(null)
  }

  const handleAppsMenuOpen = (e) => {
    setYoutubeApps(e.currentTarget)
  }

  const menuYoutubeAppsId = "youtube-apps-menu";
  const renderYoutubeAppsMenu = (
    <Menu
      // elevation={0}
      anchorEl={youtubeApps}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={menuYoutubeAppsId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isAppsOpen}
      onClose={handleAppsMenuClose}
    >
      <MenuItem onClick={handleAppsMenuClose}>< TvTwoToneIcon style={{color: "red", marginRight:"10px"}}/>YouTube TV</MenuItem>
      <Divider />
      <MenuItem onClick={handleAppsMenuClose}><MusicNoteTwoToneIcon style={{color: "red", marginRight:"10px"}}/>YouTube Music</MenuItem>
      <MenuItem onClick={handleAppsMenuClose}><YouTubeIcon style={{color: "red", marginRight:"10px"}}/>YouTube Kids</MenuItem>
      <Divider />
      <MenuItem onClick={handleAppsMenuClose}><YouTubeIcon style={{color: "red", marginRight:"10px"}}/>Creator Academy</MenuItem>
      <MenuItem onClick={handleAppsMenuClose}><YouTubeIcon style={{color: "red", marginRight:"10px"}}/>YouTube for Artists</MenuItem>
    </Menu>
  );
  


  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="create videos" color="inherit">
          <VideoCallIcon />
        </IconButton>
        <p>Create</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={props.drawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/">
            <img src={logo} alt="YouTube Logo" style={{ height: 45 }} />
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <VideoCallIcon />
            </IconButton>

            <IconButton aria-label="show 17 new notifications" color="inherit" onClick={handleAppsMenuOpen}>
              <AppsIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderYoutubeAppsMenu}
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Header;
