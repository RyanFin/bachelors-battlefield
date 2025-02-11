/* eslint-disable react/prop-types */
import { Box, Text, Flex } from "@chakra-ui/react";
import { difficulties } from "../assets/difficulties";

// Legend Component
export default function Legend() {
  return (
    <Box
      bg="#959596"
      color="white"
      p={4}
      rounded="lg"
      shadow="lg"
      w="full"
      maxW="lg"
    >
      <Text textAlign="center" fontSize="xl" fontWeight="bold" mb={4}>
        Legend
      </Text>
      <Flex flexDirection="column" align="center" gap={3}>
        <LegendItem color={difficulties.easy} text="Casual Flirt (Easy)" />
        <LegendItem
          color={difficulties.normal}
          text="Social Charmer (Normal)"
        />
        <LegendItem color={difficulties.hard} text="Heartbreaker (Hard)" />
        <LegendItem
          color={difficulties.survivor}
          text="Emotional Survivor (Survivor Mode)"
        />
        <LegendItem
          color={difficulties.grounded}
          text="Lonely Warrior (Grounded)"
        />
      </Flex>
    </Box>
  );
}

// LegendItem Component
function LegendItem({ color, text }) {
  return (
    <Flex align="center" gap={3}>
      <Box w={6} h={6} bg={color} borderRadius="full" />
      <Text>{text}</Text>
    </Flex>
  );
}
