import { Stack } from '@/layout/Stack';

const PokemonStack = () => {
  return (
    <Stack
      initialRouteName="index"
      screens={[
        {
          route: 'index',
          title: 'Pokemon',
          options: {
            isTabBarScreen: true,
          },
        },
      ]}
    />
  );
};

export default PokemonStack;
