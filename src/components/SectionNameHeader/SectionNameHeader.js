import React from "react"
import { useViewportScroll, useTransform } from "framer-motion"

import { StyledHeader, TextLine, SingleWord } from "./SectionNameHeader.style"

const generateText = title => {
  let text = []
  for (let i = 0; i < 100; i++) {
    text.push({
      title,
      isEven: i % 2 === 0 ? true : false,
      key: i,
    })
  }
  return text
}

const SectionNameHeader = ({ title, color }) => {
  const { scrollY } = useViewportScroll()
  const scroll = useTransform(scrollY, value => value / 2)
  const reverseScroll = useTransform(scrollY, value => -value / 2)

  return (
    <StyledHeader>
      <TextLine style={{ x: scroll }} initial={false} color={color}>
        {generateText(title).map(item => (
          <SingleWord key={item.key} filled={item.isEven} color={color}>
            {item.title}
          </SingleWord>
        ))}
      </TextLine>

      <TextLine style={{ x: reverseScroll }} initial={false} color={color}>
        {generateText(title).map(item => (
          <SingleWord key={item.key} filled={!item.isEven} color={color}>
            {item.title}
          </SingleWord>
        ))}
      </TextLine>
    </StyledHeader>
  )
}

export default SectionNameHeader
