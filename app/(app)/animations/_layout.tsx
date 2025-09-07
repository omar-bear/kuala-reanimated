import { Stack } from 'expo-router';

import { Header } from '@/layout/Header';

export default function AnimationsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: ({ route }) => (
          <Header title={getScreenTitle(route.name)} hasGoBack={true} />
        ),
      }}
    >
      <Stack.Screen name="flat-list-animation" />
      <Stack.Screen name="flat-list-row-animation" />
      <Stack.Screen name="pokemon-move" />
      <Stack.Screen name="pokemon-rotate" />
      <Stack.Screen name="pokemon-transform" />
      <Stack.Screen name="falling-pokemon" />
    </Stack>
  );
}

function getScreenTitle(routeName: string): string {
  switch (routeName) {
    case 'flat-list-animation':
      return 'Flat List Animation';
    case 'flat-list-row-animation':
      return 'Flat List Row Animation';
    case 'pokemon-move':
      return 'Move Animation';
    case 'pokemon-rotate':
      return 'Rotation Animation';
    case 'pokemon-transform':
      return 'Transform Animation';
    case 'falling-pokemon':
      return 'Falling Animation';
    default:
      return 'Animation';
  }
}
