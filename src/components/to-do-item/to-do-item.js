import * as React from 'react';
import './to-do-item.css';
import { useState } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

function ToDoItem(props) {
  const [checked, setChecked] = useState(false);
  const checkedChange = () => {
    setChecked(!checked)
  }

  return (
    
    <ListItem
      secondaryAction={
        <Checkbox
          onChange={checkedChange}
          checked={checked}
          edge="end"
        />
      }
      disablePadding
    >
      <ListItemButton>
        <Grid item>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°${1}`}
              src={props.task.image}
            />
          </ListItemAvatar>
        </Grid>
        <Grid item xs zeroMinWidth>
          <ListItemText className={checked ? 'through' : 'none'} primary={props.task.title} />
          <span className={checked ? 'through' : 'none'}>{props.task.description}</span>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

export default ToDoItem;