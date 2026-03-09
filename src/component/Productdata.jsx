import React from 'react'
import Productcard from './Productcard'

const Productdata = (props) => {
  return (
     <div className='h-[55vh] w-[85%] mt-8 flex flex-col gap-3 items-center justify-center '>
        <div className='flex items-center w-full justify-between'>
          <h1 className='text-[27px] font-semibold '>{props.product.title}</h1>
          <h1 className='text-2xl font-medium text-[#318616] '>See all</h1>
        </div>
    <div className='w-full flex items-center justify-between'>
         
        { props.product.card.map((value)=>{
            return(
              <Productcard data={value} items={props.items} setItems={props.setItems}/>  
            )
        })}
    </div>
     </div>
  )
}

export default Productdata