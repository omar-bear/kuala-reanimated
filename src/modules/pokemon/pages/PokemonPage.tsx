import { useCallback } from 'react';

import { Box, Text, useTheme } from 'react-native-ficus-ui';
import Animated from 'react-native-reanimated';

import { Container } from '@/layout/Container';
import { AnimationCard } from '@/modules/pokemon/components/AnimationCard';
import { ANIMATION_DEMOS } from '@/modules/pokemon/constants/animations';

const PokemonPage = () => {
  const { theme } = useTheme();

  const renderItem = useCallback(
    ({ item, index }: { item: (typeof ANIMATION_DEMOS)[0]; index: number }) => (
      <AnimationCard animation={item} index={index} />
    ),
    []
  );

  return (
    <Container px={0} py={0}>
      <Animated.FlatList
        // entering={FadeIn.duration(250)}
        data={ANIMATION_DEMOS}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', gap: 8 }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: theme?.space?.md as number,
          gap: 8,
          overflow: 'visible',
        }}
        ListHeaderComponent={
          <Box px="md" py="lg">
            <Text
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              mb="md"
              color="gray.900"
              _dark={{
                color: 'white',
              }}
            >
              Pokemon Animation Demos
            </Text>
            <Text
              fontSize="sm"
              color="gray.600"
              textAlign="center"
              mb="lg"
              _dark={{
                color: 'gray.400',
              }}
            >
              Explore different Pokemon React Native Reanimated animations
            </Text>
          </Box>
        }
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default PokemonPage;
