import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from "react-router-dom";

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class Navbar extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" className={this.props.classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Smart Restaurant
                </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={this.props.classes.drawer}
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={this.props.classes.drawerContainer}>
            <List>
              {this.props.routes.map((item, index) => {
                if(!item.sidebar) {
                  return;
                }

                return (
                  <ListItem button component={Link} to={item.path} key={item.name}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                )
              })}
            </List>
            <Divider />
            <List>
              {['My Profile', 'Log out', 'About'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar);
