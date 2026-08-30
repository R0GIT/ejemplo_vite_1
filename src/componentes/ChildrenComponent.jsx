// import React from 'react'

// Recibe de parámetro estructura HTML.
const ChildrenComponent = ({children, otro}) => {
  return (
    <>
    {children}
    <p className="clase_azul">{otro}</p>
    </>
  )
}

export default ChildrenComponent
