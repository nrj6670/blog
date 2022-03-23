import React,{useContext} from 'react';
import DataContext from '../Context/DataContext';
import { Link } from 'react-router-dom';
import "../ComponentCss/Food.css";


export default function Food() {
 
  const [data]= useContext(DataContext)
  console.log({data});
 
 
 
  return (
    <>
      <div className='main-container'>
      <div className='main'>
        <div className='main-heading'>Food</div>

      {data.filter(data => data.category==="Food").map((row)=>

      <Link to={'/article/'+row.id} style={{color:'black' }}  >

        <div className='flex'>

        <div className='img'><img src={row.img}/></div>

        <div className='article'>  
          <div className='title'>                  
          <div style={{ fontSize: '30px', fontWeight: '1000' }}>{row.title}</div>
          </div>
          <div className='about'>
          <div style={{ fontSize: '15px' }}>{row.about}</div>
          </div>
          <div className='name'>
              Food | {row.name}
          </div>
        </div>
        </div>
        
      </Link>
      )}
       </div>
       <div className='advertisement' style={{border:'2px black solid', height:'600px', marginTop:'25px'}}> Advertisement</div>

       </div>
    
  </>
  )
}
