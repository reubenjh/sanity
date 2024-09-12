import React from 'react'

const OrientedImage = (props: any) => {
  const {orientation, renderDefault} = props
  return (
    <div
      style={
        orientation === 'portrait'
          ? {float: 'right', width: '50%', margin: '0 0 1em 1em'}
          : {width: '100%', margin: '1em 0'}
      }
    >
      {renderDefault(props)}
    </div>
  )
}

export default OrientedImage
