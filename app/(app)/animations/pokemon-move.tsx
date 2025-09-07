import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { Stack, Text, VStack } from 'react-native-ficus-ui';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Container } from '@/layout/Container';

const PokemonMoveAnimation = () => {
  const translation = useSharedValue(0);

  const handlePress = () => {
    translation.value = withTiming(translation.value === 0 ? 200 : 0, {
      duration: 500,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translation.value }],
    };
  });

  return (
    <Container>
      <Stack p={20} spacing={12}>
        <VStack spacing="xl">
          <Text
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            color="gray.900"
            _dark={{
              color: 'white',
            }}
          >
            Move Animation
          </Text>
          <Text
            fontSize="md"
            color="gray.600"
            textAlign="center"
            _dark={{
              color: 'gray.400',
            }}
          >
            Tap the Pokemon to see it move horizontally
          </Text>

          <TouchableWithoutFeedback onPress={handlePress}>
            <Animated.View style={animatedStyle}>
              <Animated.Image
                source={{
                  uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
                }}
                style={{ width: 100, height: 100 }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>

          <Text
            fontSize="sm"
            color="gray.500"
            textAlign="center"
            mt="lg"
            _dark={{
              color: 'gray.500',
            }}
          >
            Uses useSharedValue and withTiming for smooth translation
          </Text>
        </VStack>
      </Stack>
    </Container>
  );
};

export default PokemonMoveAnimation;
