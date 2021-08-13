
import { Box, Button, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTodo } from "../todos/action";

export function Detail() {
     const param = useParams()
    const [data,setData]=useState([])
    const state = useSelector(state => state.todos)
    const dispatch=useDispatch()
    
    
     useEffect(()=>{
         const selectedTodo = state.filter(e=>e.id===param.id)
         setData(selectedTodo)
         },[])
   
   
    
    
    
    const handleToggle = () => {
        const toggledata = data.map(e => e.id === param.id ? { ...e, status: !e.status } : e);

        setData(toggledata)
        
        
       
        
    }
    const handleDelete = () => {
        setData([])
    }
     return <Box>todo
         {data.map(e => <Box>
            
             <Typography>Title: {e.title}</Typography>
             
             <Button variant="contained" color="primary" onClick={handleToggle}>{e.status ? "True" : "False"}</Button>
             <Button variant="contained" color="primary" onClick={handleDelete}>Delete</Button>
            

         </Box>)}
     </Box>

    
}