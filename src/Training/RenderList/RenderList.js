import React from 'react'

const RenderList = () => {

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
      ];

const listItem=products.map(products=>
      
        
         <li style={{listStyle:"none" , color:products.isFruit?"red":"Green"}} key={products.id} >
             {products.title}
         </li>
  
         
)
return (
<div>
       <ul>
        {listItem}
       </ul>

</div>
)
}

export default RenderList