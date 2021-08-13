
import { Button, TextField, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getTodo } from '../todos/action';
import {Link} from "react-router-dom"

export function Todoinp() {
    const [data, setData] = useState("")
    const state=useSelector(state=>state.todos)
    const dispatch=useDispatch()
    const [page,setPage]=useState(1)

    const handleTodo = () => {
        dispatch(addTodo(data,))
        setData("")
    }
    useEffect(() => {
        dispatch(getTodo(`https://json-server-mocker-masai.herokuapp.com/tasks?_page=${page}&_limit=5`))
    })
    return <>
        
        <Box>
            <TextField label="Standard" onChange={(e) => { setData(e.target.value) }} value={data} />
            <Button variant="contained" color="primary" onClick={handleTodo} >Add</Button>
        </Box>
        <Box>
            <Typography>Todo List</Typography>
            {state.map(e => <Box>
                <Typography>Title: {e.title}</Typography>
                <Typography>Status: {e.status ? "True" : "False"}</Typography>
                <Typography>{ e.id}</Typography>
                <Link to={`/todo/${e.id}`}>
                    more detail
                </Link>
                
            </Box>)}
        </Box>
        <Button onClick={()=>{setPage(page+1)}}>Prev</Button>
        <Typography>{ page}</Typography>
        <Button onClick={()=>{setPage(page-1)}}>next</Button>
            
        </>
}