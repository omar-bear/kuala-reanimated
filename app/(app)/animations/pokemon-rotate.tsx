import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { Stack, Text, VStack } from 'react-native-ficus-ui';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { allPokemons } from '@/constants/pokemons';
import { Container } from '@/layout/Container';

// Get a random Pokemon for this animation
const getRandomPokemon = () => {
  // eslint-disable-next-line sonarjs/pseudo-random
  return allPokemons[Math.floor(Math.random() * allPokemons.length)];
};

const PokemonRotateAnimation = () => {
  const rotation = useSharedValue(0);
  const randomPokemon = getRandomPokemon();

  const handlePress = () => {
    rotation.value = withTiming(rotation.value + 360, { duration: 1000 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <Container>
      <Stack p={20} spacing={12}>
        <VStack spacing="xl">
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            Rotation Animation
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Tap the Pokemon to see it rotate 360 degrees
          </Text>

          <TouchableWithoutFeedback onPress={handlePress}>
            <Animated.View style={animatedStyle}>
              <Animated.Image
                source={randomPokemon.image}
                style={{ width: 100, height: 100 }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>

          <Text fontSize="sm" color="gray.500" textAlign="center" mt="lg">
            Uses rotation transform with continuous 360° increments
          </Text>
        </VStack>
      </Stack>
    </Container>
  );
};

export default PokemonRotateAnimation;
