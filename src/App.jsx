import axios from 'axios';
import React from 'react';
import { useState } from 'react';
const App = () =>{

  const [data,setData]= useState([])
   const getData = async () => {
    const response= await axios.get('https://picsum.photos/id/1/200/300')  
    setData(response.data);
    console.log(data);

   }
  return (
     <div className='bg-blue-100 p-10'>
    <button onClick={getData} className='bg-green-400 text-white font-semibold text-2xl px-6 py-3 m-4 rounded-2xl active:scale-90'>Get data</button>
    <div className='p-5 mt-5 bg-gray-100'>
      {data.map(function(elem,idx){
        return  <div key={idx} className='flex items-center justify-between bg-gray-50 text-black w-full px-7 py-6 m-2 rounded mb-3'> 
        <img src={elem.download_url} alt="" />
       </div>

      })}
    </div>
     </div>
  );
}
export default App;