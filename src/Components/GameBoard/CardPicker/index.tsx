import React from 'react'
import { IPickCardIndexed } from '../../../Types'
const CardPicker = ({ children, targetCardIndexes }: { children?: any, targetCardIndexes: IPickCardIndexed[] }) => {
  return (
    <>
      {
        React.Children.map(children || null, (child, index) => {
          const targetIndex = (targetCardIndexes &&
                              targetCardIndexes.findIndex(pickData => pickData.index === index))
          const translateXY = targetCardIndexes[targetIndex]?.translateXY
          const rotate = targetCardIndexes[targetIndex]?.rotate
          const showFace = targetCardIndexes[targetIndex]?.showFace
          const playerName = targetCardIndexes[targetIndex]?.playerName
          const propsData = {
            ...child.props,
            translateXY,
            showFace,
            rotate,
            playerName
          }
          if (targetIndex === -1) {
            return <child.type {...child.props} key={index} />
          } else {
            return <child.type
                    key={index}
                    {
                      ...propsData
                    }
                   />
          }
        })
      }
    </>
  )
}


export default CardPicker