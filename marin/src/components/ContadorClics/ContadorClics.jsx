
import React, { useState } from 'react'

function ContadorClics (){
   const [contador, setContador]=useState(1);

   // const suma = ()=>{
   //    setContador(contador + 1);
   // }
   const resta =()=>{
      contador > 1 && setContador(contador - 1)
   }
return(
   <>
   <button onClick={()=>setContador(contador + 1)}>+</button>
   <p>{contador}</p>
   <button onClick={resta}>-</button>
   </>
)
}
export default ContadorClics