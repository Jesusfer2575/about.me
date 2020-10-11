import React from 'react';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './Menu.styles';

interface MenuProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ toggleDrawer, open }: MenuProps) => {
  const { push } = useHistory();
  const classes = useStyles();

  return (
    <Drawer className={classes.paper} open={open} onClose={() => toggleDrawer(false)}>
      <div role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => push('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => push('/about')}>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Menu;
