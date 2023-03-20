import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
 
import axios from 'axios';
export default function Houses() {
  const [houses, setHouses] = React.useState([]);
  const show=()=>{
    axios.get("https://localhost:7276/api/VillaAPI")
     .then(response => {
       const houses = response.data;
       console.log(houses);
       setHouses(houses)
     })
}
useEffect(() => {
  show();
  console.log(houses)

}, []);

  return (
    <div >
                                
   
   
    <Table size="small">
      <TableHead>
        <TableRow>
       
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Nom</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Adresse</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Région</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Gouvernement</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Entraîneur</TableCell>
          <TableCell style={{fontFamily:"fantasy",color:"#a3b18a"}}>Catégorie</TableCell>
        </TableRow>
          
      </TableHead>
      <TableBody>
        
     {houses.slice(0,4).map((c)=>{
      return(  
       <TableRow >
      <TableCell> {c.id}</TableCell>
      <TableCell>  {c.name}</TableCell>
      <TableCell>  {c.superficie}</TableCell>
      <TableCell> {c.description} </TableCell>
      <TableCell>  {c.nbRoom}</TableCell>
      <TableCell> </TableCell>
      </TableRow>)
    
     })} 
        
      
          
        
      </TableBody>
    </Table>
    
    
   
   
  
  </div>
  )
}
  
  
  
  
  