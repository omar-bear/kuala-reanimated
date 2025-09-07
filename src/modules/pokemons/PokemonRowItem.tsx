import { FC } from 'react';

import { Box, Button, Image, Text } from 'react-native-ficus-ui';

import {
  initialListAPokemons,
  initialListBPokemons,
} from '@/constants/pokemons';

export const PokemonRowItem: FC<{
  id: string;
  onPress: (id: string) => void;
}> = ({ id, onPress }) => {
  if (id === 'separator') {
    return (
      <Box my="lg">
        <Text textAlign="center" fontSize="xl" fontWeight="700">
          Equipe B
        </Text>
      </Box>
    );
  }

  const pokemon = initialListAPokemons
    .concat(initialListBPokemons)
    .find((p) => p.id === id);

  return (
    <Button
      zIndex={2}
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      _pressed={{
        bg: 'gray.100',
        _dark: {
          bg: 'gray.700',
        },
      }}
      onPress={() => onPress(id)}
      py="md"
      px="md"
      shadow="xs"
      h="auto"
    >
      <Box
        flexDirection="row"
        alignItems="center"
        bg="transparent"
        borderRadius={8}
        flex={1}
      >
        <Image
          source={{ uri: pokemon?.image }}
          style={{
            width: 40,
            height: 40,
            marginRight: 20,
          }}
        />
        <Box>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="gray.900"
            _dark={{
              color: 'white',
            }}
          >
            {pokemon?.name}
          </Text>
          <Text
            fontSize="md"
            color="gray.500"
            _dark={{
              color: 'gray.400',
            }}
          >
            {pokemon?.type}
          </Text>
        </Box>
      </Box>
    </Button>
  );
};
