import React from "react"
import { useViewportScroll, useTransform } from "framer-motion"

import { StyledHeader, TextLine, SingleWord } from "./SectionNameHeader.style"

const generateText = title => {
  let text = []
  for (let i = 0; i < 30; i++) {
    text.push({
      title,
      isEven: i % 2 === 0 ? true : false,
      key: i,
    })
  }
  return text
}

const SectionNameHeader = ({ title }) => {
  const { scrollY } = useViewportScroll()
  const scroll = useTransform(scrollY, value => value / 3)
  const reverseScroll = useTransform(scrollY, value => -value / 3)

  return (
    <StyledHeader>
      <TextLine style={{ x: scroll }} initial={false}>
        {generateText(title).map(item => (
          <SingleWord key={item.key} filled={item.isEven}>
            {item.title}
          </SingleWord>
        ))}
      </TextLine>

      <TextLine style={{ x: reverseScroll }} initial={false}>
        {generateText(title).map(item => (
          <SingleWord key={item.key} filled={!item.isEven}>
            {item.title}
          </SingleWord>
        ))}
      </TextLine>
    </StyledHeader>
  )
}

export default SectionNameHeader
