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

import { Container } from '@/layout/Container';

const PokemonTransformAnimation = () => {
  const imageSize = useSharedValue(100);
  const imageOpacity = useSharedValue(1);

  const [pokemonImage, setPokemonImage] = useState(
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
  );

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
    if (pokemonImage.includes('004.png')) {
      setPokemonImage(
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
      );
      // Animate size growth
      imageSize.value = withSpring(160, {
        damping: 15,
        stiffness: 100,
      });
    } else if (pokemonImage.includes('005.png')) {
      setPokemonImage(
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
      );
      // Animate size growth
      imageSize.value = withSpring(220, {
        damping: 15,
        stiffness: 100,
      });
    } else {
      setPokemonImage(
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
      );
      // Animate size back to original
      imageSize.value = withSpring(100, {
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

  const getPokemonName = (url: string) => {
    if (url.includes('004.png')) {
      return 'Charmander';
    }
    if (url.includes('005.png')) {
      return 'Charmeleon';
    }
    return 'Charizard';
  };

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
                source={{ uri: pokemonImage }}
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
                  {getPokemonName(pokemonImage)}
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
