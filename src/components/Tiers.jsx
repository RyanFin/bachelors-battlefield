import { Box, Text, VStack } from "@chakra-ui/react";
import { difficulties } from "../assets/difficulties";

// Difficulty Card Component
function DifficultyCard({ bgColor, title, description }) {
  return (
    <Box
      bg={bgColor}
      borderRadius="md"
      boxShadow="lg"
      p={6}
      w="full"
      color="white"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text fontSize="md">{description}</Text>
    </Box>
  );
}

// Tiers Component
export default function Tiers() {
  return (
    <VStack spacing={5} mt={10} maxW="800px" mx="auto" px={4}>
      <DifficultyCard
        bgColor={difficulties.easy}
        title="Casual Flirt (Easy)"
        description="Women smile at you first, conversations flow effortlessly, and numbers are handed out like free samples. Even if you fumble, they find it cute. Confidence is high, rejection is rare, and dating feels like a breeze."
      />

      <DifficultyCard
        bgColor={difficulties.normal}
        title="Social Charmer (Normal)"
        description="You have to put in effort, but with decent confidence and conversation skills, you get regular dates. Occasional rejections sting but are manageable."
      />

      <DifficultyCard
        bgColor={difficulties.hard}
        title="Heartbreaker (Hard)"
        description="Women are more skeptical, conversations require finesse, and ghosting is common. A single misstep can cost you the connection. You need to be socially sharp, as competition is high and expectations are raised."
      />

      <DifficultyCard
        bgColor={difficulties.survivor}
        title="Emotional Survivor (Survivor Mode)"
        description="Every approach is a battle. Rejections pile up, dates are scarce, and self-doubt creeps in. Only the most resilient survive. Success is possible, but requires significant effort, persistence, and emotional endurance."
      />

      <DifficultyCard
        bgColor={difficulties.grounded}
        title="Lonely Warrior (Grounded)"
        description="No second chances. No hints of interest. Ghosting is inevitable. Every interaction feels like an uphill struggle, and even small victories are rare. Conversations often fizzle out, and dates feel nearly impossible to secure."
      />
    </VStack>
  );
}
