import { Box, Text, Flex } from "@chakra-ui/react";

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
        <LegendItem color="#d2b48c" text="Casual Flirt (Easy)" />
        <LegendItem color="#c08552" text="Social Charmer (Normal)" />
        <LegendItem color="#964b00" text="Heartbreaker (Hard)" />
        <LegendItem color="#4b3621" text="Emotional Survivor (Survivor Mode)" />
        <LegendItem color="#000000" text="Lonely Warrior (Grounded)" />
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
