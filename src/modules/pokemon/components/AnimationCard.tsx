import React from 'react';

import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from 'react-native-ficus-ui';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { AnimationDemo } from '../constants/animations';

interface AnimationCardProps {
  animation: AnimationDemo;
  index: number;
}

export const AnimationCard: React.FC<AnimationCardProps> = ({
  animation,
  index,
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(animation.route);
  };

  return (
    <Animated.View
      entering={FadeInUp.delay(index * 100).duration(400)}
      style={{ flex: 1 }}
    >
      <TouchableOpacity
        onPress={handlePress}
        style={{ flex: 1 }}
        activeOpacity={0.7}
      >
        <Box
          bg="white"
          borderRadius="xl"
          p="lg"
          shadow="2"
          borderWidth={1}
          borderColor="gray.100"
          h={180}
          justifyContent="space-between"
          _dark={{
            bg: 'gray.800',
            borderColor: 'gray.700',
          }}
        >
          <Box alignItems="center" mb="sm">
            <Text fontSize="2xl" mb="xs">
              {animation.icon}
            </Text>
            <Text
              fontSize="md"
              fontWeight="600"
              textAlign="center"
              numberOfLines={2}
              color="gray.900"
              _dark={{
                color: 'white',
              }}
            >
              {animation.title}
            </Text>
          </Box>

          <Text
            fontSize="sm"
            color="gray.600"
            textAlign="center"
            numberOfLines={3}
            _dark={{
              color: 'gray.400',
            }}
          >
            {animation.description}
          </Text>
        </Box>
      </TouchableOpacity>
    </Animated.View>
  );
};
