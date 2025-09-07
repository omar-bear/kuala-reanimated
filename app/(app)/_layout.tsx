import { Stack } from '@/layout/Stack';

const AppStack = () => {
  return (
    <Stack
      initialRouteName="(tabs)"
      screens={[
        {
          route: '(tabs)',
          options: {
            headerShown: false,
          },
        },
        {
          route: 'animations',
          options: {
            headerShown: false,
          },
        },
      ]}
    />
  );
};

export default AppStack;
