export interface AnimationDemo {
  id: string;
  title: string;
  description: string;
  route: string;
  icon?: string;
}

export const ANIMATION_DEMOS: AnimationDemo[] = [
  {
    id: 'flat-list-animation',
    title: 'Flat List Animation',
    description: 'Interactive list with smooth item transitions between teams',
    route: '/animations/flat-list-animation',
    icon: '📋',
  },
  {
    id: 'flat-list-row-animation',
    title: 'Flat List Row Animation',
    description: 'Row-based list with spring animations and layout transitions',
    route: '/animations/flat-list-row-animation',
    icon: '📃',
  },
  {
    id: 'pokemon-move',
    title: 'Move Animation',
    description: 'Touch to move elements with smooth translation',
    route: '/animations/pokemon-move',
    icon: '➡️',
  },
  {
    id: 'pokemon-rotate',
    title: 'Rotation Animation',
    description: 'Touch to rotate elements with timing animations',
    route: '/animations/pokemon-rotate',
    icon: '🔄',
  },
  {
    id: 'pokemon-transform',
    title: 'Transform Animation',
    description: 'Fade and transform elements with opacity changes',
    route: '/animations/pokemon-transform',
    icon: '✨',
  },
  {
    id: 'falling-pokemon',
    title: 'Falling Animation',
    description: 'Continuous falling elements with random properties',
    route: '/animations/falling-pokemon',
    icon: '🌧️',
  },
];
