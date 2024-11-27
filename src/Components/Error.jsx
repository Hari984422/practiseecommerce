import React from 'react'

export default function Error() {
  return (
    <div className='Error'>
        <marquee behavior="" direction="">
            <h1>Error 404</h1>
         <h1>Page not Found</h1>
         <img src="data:image/jpeg;base64,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" alt="" />
        </marquee>
    </div>
  )
}
