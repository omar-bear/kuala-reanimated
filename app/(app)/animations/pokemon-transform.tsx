import React, { useState } from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { Stack, Text, VStack } from 'react-native-ficus-ui';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Container } from '@/layout/Container';

const PokemonTransformAnimation = () => {
  const fadeOpacity = useSharedValue(1);
  const [pokemonImage, setPokemonImage] = useState(
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
  );

  const handlePress = () => {
    fadeOpacity.value = withTiming(0, { duration: 300 }, (finished) => {
      if (finished) {
        runOnJS(changePokemon)();
        fadeOpacity.value = withTiming(1, { duration: 300 });
      }
    });
  };

  const changePokemon = () => {
    if (pokemonImage.includes('004.png')) {
      setPokemonImage(
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
      );
    } else if (pokemonImage.includes('005.png')) {
      setPokemonImage(
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
      );
    } else {
      setPokemonImage(
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
      );
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeOpacity.value,
  }));

  const getSize = (url: string) => {
    if (url.includes('004.png')) {
      return 100;
    }
    if (url.includes('005.png')) {
      return 120;
    }
    return 140;
  };

  const getPokemonName = (url: string) => {
    if (url.includes('004.png')) {
      return 'Charmander';
    }
    if (url.includes('005.png')) {
      return 'Charmeleon';
    }
    return 'Charizard';
  };

  const pokemonSize = getSize(pokemonImage);

  return (
    <Container>
      <Stack p={20} spacing={12}>
        <VStack spacing="xl">
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            Transform Animation
          </Text>
          <Text fontSize="md" color="gray.600" textAlign="center">
            Tap to see the Pokemon evolve with fade transition
          </Text>

          <TouchableWithoutFeedback onPress={handlePress}>
            <Animated.View style={[animatedStyle, { alignItems: 'center' }]}>
              <Animated.Image
                source={{ uri: pokemonImage }}
                style={{
                  width: pokemonSize,
                  height: pokemonSize,
                  marginVertical: 20,
                }}
              />
              <Text fontSize="lg" fontWeight="bold" textAlign="center">
                {getPokemonName(pokemonImage)}
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>

          <Text fontSize="sm" color="gray.500" textAlign="center" mt="lg">
            Uses opacity animation with runOnJS for state changes
          </Text>
        </VStack>
      </Stack>
    </Container>
  );
};

export default PokemonTransformAnimation;
