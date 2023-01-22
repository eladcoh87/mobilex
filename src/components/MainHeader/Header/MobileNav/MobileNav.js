import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './MobileNav.css';

export default function TemporaryDrawer() {
  const [state, setState] = useState({ left: false });

  const onClickHandel = () => {
    setState({ left: true });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ left: false });
  };

  const list = (anchor) => (
    <Box
      className="box"
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="mobilenavLinks">
          <ul className="mobilenavlistitem">
            <li>Menu</li>
            <Divider />
            <li>About</li>
            <Divider />
            <li>Contact</li>
            <Divider />
            <li>News</li>
          </ul>
        </div>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <MenuIcon onClick={onClickHandel} className="menuicon" fontSize="large" />

      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}
