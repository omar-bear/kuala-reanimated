import React, { FC, useCallback, useEffect } from 'react';

import { Dimensions, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-ficus-ui';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { allPokemons } from '@/constants/pokemons';
import { Container } from '@/layout/Container';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const randomBetween = (min: number, max: number) =>
  // eslint-disable-next-line sonarjs/pseudo-random
  Math.random() * (max - min) + min;

// Function to get random Pokemon
const getRandomPokemons = (count: number) => {
  // eslint-disable-next-line sonarjs/pseudo-random
  const shuffled = [...allPokemons].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

type AnimatedPokemonProps = {
  source: any;
  index: number;
};

const AnimatedPokemon: FC<AnimatedPokemonProps> = ({ source, index }) => {
  const yPosition = useSharedValue(screenHeight + 200);
  const rotation = useSharedValue(0);
  const width = useSharedValue(100);
  const left = useSharedValue(0);

  const startAnimation = useCallback(() => {
    const randomDuration = randomBetween(5000, 7000);
    const widthRandom = randomBetween(100, 300);
    const randomDurationWithDelay = randomDuration - 500;

    yPosition.value = screenHeight + 200;
    rotation.value = withTiming(randomBetween(-40, 40), {
      duration: randomDurationWithDelay,
      easing: Easing.linear,
    });

    width.value = withTiming(widthRandom, {
      duration: randomDurationWithDelay,
      easing: Easing.linear,
    });

    left.value = withTiming(randomBetween(-50, screenWidth - 100), {
      duration: randomDurationWithDelay,
      easing: Easing.linear,
    });

    yPosition.value = withTiming(
      -100,
      {
        duration: randomDuration,
        easing: Easing.linear,
      },
      (finished) => {
        if (finished) {
          runOnJS(startAnimation)();
        }
      }
    );
  }, [left, rotation, width, yPosition]);

  useEffect(() => {
    const delay = setTimeout(() => {
      startAnimation();
    }, index * 1000);
    return () => {
      clearTimeout(delay);
    };
  }, [startAnimation, index]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: yPosition.value },
      { rotate: `${rotation.value}deg` },
    ],
    width: width.value,
    aspectRatio: 1,
    top: -100,
    left: left.value,
  }));

  return (
    <Animated.View style={[styles.imageContainer, animatedStyle]}>
      <Animated.Image
        source={source}
        style={{ width: '100%', height: '100%' }}
      />
    </Animated.View>
  );
};

const FallingPokemonAnimation = () => {
  const randomPokemons = getRandomPokemons(100);

  return (
    <Container px={0} py={0}>
      <Box
        p="lg"
        bg="rgba(0,0,0,0.05)"
        _dark={{
          bg: 'rgba(255,255,255,0.05)',
        }}
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          textAlign="center"
          color="gray.900"
          _dark={{
            color: 'white',
          }}
        >
          Falling Animation
        </Text>
        <Text
          fontSize="md"
          color="gray.600"
          textAlign="center"
          mt="xs"
          _dark={{
            color: 'gray.400',
          }}
        >
          Watch Pokemon fall from the sky with random properties
        </Text>
      </Box>

      <Box flex={1} position="relative" overflow="hidden">
        {randomPokemons.map((pokemon, index) => (
          <AnimatedPokemon
            key={pokemon.id}
            source={pokemon.image}
            index={index}
          />
        ))}
      </Box>

      <Box
        p="md"
        bg="rgba(0,0,0,0.05)"
        _dark={{
          bg: 'rgba(255,255,255,0.05)',
        }}
      >
        <Text
          fontSize="sm"
          color="gray.500"
          textAlign="center"
          _dark={{
            color: 'gray.500',
          }}
        >
          Continuous animation with random timing, rotation, and positioning
        </Text>
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
  },
});

export default FallingPokemonAnimation;
