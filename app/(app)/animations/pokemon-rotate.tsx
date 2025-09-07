import React from 'react';

import { TouchableWithoutFeedback } from 'react-native';
import { Stack, Text, VStack } from 'react-native-ficus-ui';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Container } from '@/layout/Container';

const PokemonRotateAnimation = () => {
  const rotation = useSharedValue(0);

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
                source={{
                  uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
                }}
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
