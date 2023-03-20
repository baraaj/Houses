import React, { useEffect } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'superficie', headerName: 'Last name', width: 130 },
  {
    field: 'description',
    headerName: 'Description',
    
    width: 90,
  },
  {
    field: 'nbRoom',
    headerName: 'Nb Room',
    type: 'number',
   
    width: 160,
   
   
  },
  {
    field: 'rate',
    headerName: 'Rate',
    type: 'number',
   
    width:90,
   
   
  },
];


export default function Home() {
    const [houses, setHouses] = React.useState([]);
const show=()=>{
  axios.get("https://localhost:7276/api/VillaAPI")
   .then(response => {
     const houses = response.data;
    
     setHouses(houses)
   })
}
useEffect(() => {
    show();
    
  
  }, [houses]);
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={houses}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
