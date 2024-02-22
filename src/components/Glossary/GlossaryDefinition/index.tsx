import { ComponentProps } from "react"
import { Box, Text } from "@chakra-ui/react"

import OldHeading from "@/components/OldHeading"
import Translation from "@/components/Translation"

interface GlossaryDefinitionProps {
  term: string
  size?: "md" | "sm"
  options?: ComponentProps<typeof Translation>["options"]
}

const DEFAULT_NS = "glossary"

const GlossaryDefinition = ({
  term,
  size = "md",
  options = { ns: DEFAULT_NS },
}: GlossaryDefinitionProps) => {
  const headingStyles =
    size === "sm"
      ? { fontSize: "md", mt: 0, mb: 2 }
      : { fontSize: { base: "xl", md: "2xl" } }

  const textStyles = size === "sm" ? { mb: 0 } : {}

  return (
    <Box textAlign="left">
      <OldHeading as="h3" lineHeight={1.4} id={term} {...headingStyles}>
        <Translation id={term + "-term"} options={options} />
      </OldHeading>
      <Text {...textStyles}>
        <Translation id={term + "-definition"} options={options} />
      </Text>
    </Box>
  )
}

export default GlossaryDefinition
