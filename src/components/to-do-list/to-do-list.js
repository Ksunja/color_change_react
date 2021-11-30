import * as React from 'react';
import './to-do-list.css';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/taskContext';
import ToDoItem from '../to-do-item/to-do-item';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function ToDoList() {
    const [tasks, setTasks] = useContext(TaskContext);

    return <div>
        <h4>
          Shopping list
        </h4>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: '#cfe8fc' }}>
            {tasks.map(task =>
                <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <ToDoItem task={task} />
                        </Grid>
                    </Paper>
                </Box>
            )}
        </List>


    </div>
}

export default ToDoList;