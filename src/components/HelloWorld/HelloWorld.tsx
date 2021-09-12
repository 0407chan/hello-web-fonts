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
      <S.WordWrapper>
        {text.split(' ').map((word, index) => {
          const newWord: JSX.Element[] = []
          word.split('').forEach((alpha, index) => {
            const value = `${alpha}-${index}`
            newWord.push(
              <S.StyledText
                key={value}
                ref={(element) => refMap.set(value, element)}
                className="no-drag"
                myText={alpha}
                onMouseOver={() => hoverEvent(value)}
                onMouseLeave={() => removeClass(value)}
              >
                {alpha}
              </S.StyledText>
            )
          })

          return <S.Word key={word}>{newWord}</S.Word>
        })}
      </S.WordWrapper>
    </S.Container>
  )
}

export default HelloWorld
