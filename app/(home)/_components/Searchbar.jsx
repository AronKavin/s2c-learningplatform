import React from 'react'
import {Search}from 'lucide-react'
function Searchbar() {
  return (
    <div className='flex gap-3 text-[14px] items-center border p-2 rounded-md bg-gray-50 text-gray-500'>
      <Search hright={17}/>
      <input type="text" placeholder="search course"
      className='bg-transparent outline-none'/>
    </div>
  )
}

export default Searchbar
