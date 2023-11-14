import React from 'react'

const banner = ({children, source}) => {
  return (
    <div>
      <img src={source} />
      {children}
    </div>
  )
}

export default banner


const banner = () => {
    return (
      <banner source={}>
de
      </banner>
    )
  }