
// "use client"

import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
// import 'react-spring-bottom-sheet/dist/style.css'

export default function Testo(): any  {
//   const [open, setOpen] = useState(true)
  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open</button> */}
      <BottomSheet open={true}>My awesome content here</BottomSheet>
    </>
  )
}