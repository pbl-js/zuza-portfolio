import React from "react"

import SectionWrapper from "components/SectionWrapper/SectionWrapper"
import H1 from "components/H1/H1"
import CallToAction from "components/CallToAction/CallToAction"
import {
  InfoBoxWrapper,
  PrimaryInfoBox,
  SecondaryInfoBox,
  StyledDots,
  KnowledgeGrid,
  KnowledgeItem,
} from "./Offer.style"
import ZeroWaste from "icons/ZeroWaste"
import Circular from "icons/Circular"
import PlasticFree from "icons/PlasticFree"
import VeganVegetarian from "icons/VeganVegetarian"
import OrganicSkincare from "icons/OrganicSkincare"
import PoliticalAnalysis from "icons/PoliticalAnalysis"
import SocialAdvocacy from "icons/SocialAdvocacy"
import CorporateResponsibility from "icons/CorporateResponsibility"

const knowledge = [
  {
    title: "zero waste",
    icon: <ZeroWaste />,
  },
  {
    title: "circular",
    icon: <Circular />,
  },
  {
    title: "plastic-free",
    icon: <PlasticFree />,
  },
  {
    title: "vegan & vegetarian",
    icon: <VeganVegetarian />,
  },
  {
    title: "organic skincare",
    icon: <OrganicSkincare />,
  },
  {
    title: "corporate social responsibility",
    icon: <CorporateResponsibility />,
  },
  {
    title: "political analysis",
    icon: <PoliticalAnalysis />,
  },
  {
    title: "social advocacy campaigning",
    icon: <SocialAdvocacy />,
  },
  ,
]

const Offer = ({ id, color, forwardRef }) => {
  return (
    <SectionWrapper id={id} color={color} forwardRef={forwardRef}>
      <H1>
        Give your brand a voice by engaging your customers with your business's
        values. Original content allows you to:
      </H1>

      <InfoBoxWrapper>
        <PrimaryInfoBox>
          Expand your client base through organic search
        </PrimaryInfoBox>

        <SecondaryInfoBox secondary="secondary">
          Establish loyalty of your returning customers
        </SecondaryInfoBox>

        <StyledDots />
      </InfoBoxWrapper>

      <CallToAction>
        I offer content that is search engine friendly, written in an immaculate
        style, proofread, adequately referenced and ready to publish.
      </CallToAction>

      <H1>My expert knowledge include, but are not limited to:</H1>

      <KnowledgeGrid>
        {knowledge.map((item, index) => (
          <KnowledgeItem
            as="li"
            key={item.title}
            secondary={index % 2 === 0 ? "secondary" : null}
          >
            {item.icon}
            {item.title}
          </KnowledgeItem>
        ))}
      </KnowledgeGrid>

      <H1 as="p">
        My services are ideal for social enterprises, start-ups and scale-ups
        that want to solidify their following, corporations that aim for a
        socially responsible shift or non-governmental organizations that look
        towards expanding their reach.
      </H1>
    </SectionWrapper>
  )
}

export default Offer
