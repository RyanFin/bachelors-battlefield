import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import GoogleMap from "../src/components/GoogleMap";
import Legend from "./components/Legend";

function App() {
  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Styled Title */}
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        color="red.200"
        mb={6}
      >
        <span>❤️</span> Bachelor&apos;s Battlefield <span>🪓</span>
      </Text>

      {/* Grid Layout for Map and Legend */}
      <Grid
        w="full"
        maxW="80%"
        gridTemplateColumns={{ base: "1fr", md: "5fr 1fr" }}
        gap={6}
        alignItems="center"
      >
        <GridItem mt={6} w="full" h="full">
          <GoogleMap />
        </GridItem>
        <GridItem mt={6} w="full" maxW="300px">
          <Legend />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
