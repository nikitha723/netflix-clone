import React from 'react'
import Image from 'next/image'

export default function Nav() {
  return (
    <div className="fixed top-0 w-full h-30 bg-black p-8">
        <div className="flex justify-between items-center">
            <div className="fixed left-0 top-1 -ml-10">
                <Image 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    width={200}
                    height={60}
                    objectFit="contain"
                />
            </div>
            <div className="fixed right-2 top-5 -mr-4">
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    width={80}
                    height={30}
                    objectFit="contain"
                />
            </div>
        
        </div>
    </div>
  )
}
