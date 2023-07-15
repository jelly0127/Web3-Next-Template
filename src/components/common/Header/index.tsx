import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      <div>Header</div>
      <br />
      <Link href={'/about'}> To About Page</Link>
    </>
  )
}

export default index
