import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(#000000, #000000b2);
  height: 100vh;
  width: 100vw;
`

export const WordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
  height: 500px;
  width: 100%;
`
export const Word = styled.div`
  display: flex;
`

export const StyledText = styled.span<{ myText: string }>`
  position: relative;
  z-index: 1;
  font-size: 120px;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(#98ecff, #fba7ff);
  -webkit-background-clip: text;
  color: transparent;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    content: '${(props) => props.myText}';
    background-image: linear-gradient(#25d7ff, #f201ff);
    transition: opacity 0.2s ease, transform 0.2s ease;
    opacity: 0;
    -webkit-background-clip: text;
  }

  &.transitionOn::before {
    opacity: 1;
  }
`
