// import React from 'react'

const Pais = ({pais}) => {
  return (
    <>
        <tr key = {pais.Id}>
            <td>{pais.Id}</td>
            <td>{pais.Nombre}</td>
            <td>{pais.Clave}</td>
        </tr>
    </>
  )
}

export default Pais
