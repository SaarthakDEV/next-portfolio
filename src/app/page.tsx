import Background from '@/components/Background'
import Tag from '@/components/Tag'
import React from 'react'

const page = () => {
  return (
    <div>
      <Background />
      <div className="relative mt-10 text-center justify-center">
      <Tag />
      <h1 className="text-7xl mt-8 text-transparent bg-gradient-to-r from-red-900 to-white bg-clip-text">Saarthak Gupta</h1>
      </div>
    </div>
  )
}

export default page
