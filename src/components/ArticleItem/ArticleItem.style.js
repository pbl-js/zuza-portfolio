import styled from "styled-components"

export const ItemWrapper = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
`
