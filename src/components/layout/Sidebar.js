import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";

import Divider from "@material-ui/core/Divider";

import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});


let iconData1 = {
  Home: <HomeIcon />,
  Explore: <ExploreIcon />,
  Subscriptions: <SubscriptionsIcon />,
};

let iconData2 = {
  Library: <VideoLibraryIcon />,
  History: <HistoryIcon />,
  YourVideos: <OndemandVideoRoundedIcon/>,
  WatchLater: <WatchLaterRoundedIcon/>
};

const TemporaryDrawer = (props) => {
  const classes = useStyles();

  const list = () => (

    <div className={classes.root}>
      <Drawer
        style={{ zIndex: "0" }}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.isOpen,
          [classes.drawerClose]: !props.isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.isOpen,
            [classes.drawerClose]: !props.isOpen,
          }),
        }}
      >
        <div className={classes.toolbar}></div>
        <List>
          <ListItem>
            <ListItemIcon><MenuIcon/></ListItemIcon>
            <Link to="/">
              <img src={logo} alt="YouTube Logo" style={{ height: 50, margin: "5px 50px 0 0px"}} />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          {Object.keys(iconData1).map((key, index) => (
            <ListItem button key={key}>
              <ListItemIcon>{iconData1[key]}</ListItemIcon>
              <ListItemText primary={key} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Object.keys(iconData2).map((key, index) => (
            <ListItem button key={key}>
              <ListItemIcon>{iconData2[key]}</ListItemIcon>
              <ListItemText primary={key} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

      </main>
    </div>
  );

  return (
    <div>
      <Drawer open={props.isOpen} onClose={props.drawerToggle}>
        {list()}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
