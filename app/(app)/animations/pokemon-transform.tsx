import React, { useState } from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { Box, Stack, Text, VStack } from 'react-native-ficus-ui';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { allPokemons } from '@/constants/pokemons';
import { Container } from '@/layout/Container';

// Get Charmander evolution line from assets
const charmanderEvolutions = [
  allPokemons.find((p) => p.id === '4'), // Charmander
  allPokemons.find((p) => p.id === '5'), // Charmeleon
  allPokemons.find((p) => p.id === '6'), // Charizard
].filter(Boolean);

const PokemonTransformAnimation = () => {
  const imageSize = useSharedValue(100);
  const imageOpacity = useSharedValue(1);

  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  const handlePress = () => {
    // Fade out the image
    imageOpacity.value = withTiming(0, { duration: 300 }, (finished) => {
      if (finished) {
        // Change Pokemon when fade out is complete
        runOnJS(changePokemon)();
        // Fade back in
        imageOpacity.value = withTiming(1, { duration: 300 });
      }
    });
  };

  const changePokemon = () => {
    const nextIndex = (currentPokemonIndex + 1) % charmanderEvolutions.length;
    setCurrentPokemonIndex(nextIndex);

    // Animate size based on evolution stage
    if (nextIndex === 0) {
      // Back to Charmander
      imageSize.value = withSpring(100, {
        damping: 15,
        stiffness: 100,
      });
    } else if (nextIndex === 1) {
      // Charmeleon
      imageSize.value = withSpring(160, {
        damping: 15,
        stiffness: 100,
      });
    } else {
      // Charizard
      imageSize.value = withSpring(220, {
        damping: 15,
        stiffness: 100,
      });
    }
  };

  const animatedImageStyle = useAnimatedStyle(() => ({
    width: imageSize.value,
    height: imageSize.value,
    opacity: imageOpacity.value,
  }));

  const currentPokemon = charmanderEvolutions[currentPokemonIndex];

  return (
    <Container>
      <Stack p={20} spacing={12}>
        <VStack spacing="xl">
          <Text
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            _dark={{ color: 'white' }}
          >
            Transform Animation
          </Text>
          <Text
            fontSize="md"
            color="gray.600"
            textAlign="center"
            _dark={{ color: 'gray.400' }}
          >
            Tap to see the Pokemon evolve with growing size and smooth
            transitions
          </Text>

          <TouchableWithoutFeedback onPress={handlePress}>
            <Animated.View style={{ alignItems: 'center' }}>
              <Animated.Image
                source={currentPokemon?.image}
                style={{
                  ...animatedImageStyle,
                  marginVertical: 20,
                }}
              />
              <Box>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  textAlign="center"
                  _dark={{ color: 'white' }}
                >
                  {currentPokemon?.name}
                </Text>
              </Box>
            </Animated.View>
          </TouchableWithoutFeedback>

          <Text
            fontSize="sm"
            color="gray.500"
            textAlign="center"
            mt="lg"
            _dark={{ color: 'gray.400' }}
          >
            Uses fade in/out transitions and size animations with smooth spring
            transitions
          </Text>
        </VStack>
      </Stack>
    </Container>
  );
};

export default PokemonTransformAnimation;
