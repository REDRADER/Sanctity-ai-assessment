
import Link from 'next/link'
import React from 'react'

const StepText = ({children,link,...props}) => {
  return (
    <Link href={link} {...props}>
      {children}
    </Link>
  )
}

export default StepText
