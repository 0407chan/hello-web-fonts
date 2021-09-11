import React, { useState } from 'react'
import * as S from './style'

const HelloWorld: React.FC = () => {
  const [text] = useState<string>('Hello Web Fonts!')
  const refMap = new Map<string, HTMLElement | null>()

  text.split('').forEach((alpha, index) => {
    refMap.set(`${alpha}-${index}`, null)
  })

  const hoverEvent = (value: string) => {
    refMap.get(value)?.classList.add('transitionOn')
  }
  const removeClass = (value: string) => {
    refMap.get(value)?.classList.remove('transitionOn')
  }

  return (
    <S.Container>
      {text.split('').map((alpha, index) => {
        const value = `${alpha}-${index}`
        return (
          <S.MainText
            key={value}
            ref={(element) => refMap.set(value, element)}
            className="no-drag"
            myText={alpha}
            onMouseOver={() => hoverEvent(value)}
            onMouseLeave={() => removeClass(value)}
          >
            {alpha !== ' ' ? alpha : <span style={{ marginRight: 40 }} />}
          </S.MainText>
        )
      })}
    </S.Container>
  )
}

export default HelloWorld
