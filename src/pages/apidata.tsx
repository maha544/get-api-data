import { Box, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Grid from "../components/ForGrid";
import DeleteIcon from '@mui/icons-material/Delete';

export default function APIData() {
    let [userData , setUserData] = useState <any>([]) 
    const [dataLoad , setDataLoad] = useState(false)
    const getApiData =()=>{
        setDataLoad(true)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res)
            setUserData([...res.data])
            setDataLoad(false)
        }).catch((e)=>{
            console.log(e.message)
            setDataLoad(false)
        })
    }
    return (
        <>
            <Box>
                <Button onClick={getApiData} sx={{margin: 1, textTransform: 'capitalize'}} variant="contained">Get Data</Button>
                <Grid 
                loading={dataLoad}
                gridCols={[
                    {
                        key: 'name',
                        label: 'User Name'
                    },
                    {
                        key: 'email',
                        label: 'User Email'
                    },
                    {
                        key: 'phone',
                        label: 'Phone'
                    },
                    {
                        key: 'website',
                        label: 'Link'
                    },
                    {
                        key: '',
                        label: 'Delete',
                        displayField: (row: any) => <Button startIcon={<DeleteIcon />} onClick={() => {
                            console.log(row)
                        }} sx={{margin: 2, textTransform: 'capitalize'}} color="error" variant="contained">Delete</Button>
                    },
                ]} dataSource={userData}
                />
            </Box>
        </>
    );
}

