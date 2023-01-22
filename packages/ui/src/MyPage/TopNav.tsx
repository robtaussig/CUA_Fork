import { styled, XStack } from 'tamagui';

export const TOP_NAV_HEIGHT = 100;

export const TopNav = styled(XStack, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bc: 'black',
  height: TOP_NAV_HEIGHT,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  display: 'flex',
  paddingBottom: 10,
  px: 20,
  animation: 'lazy',
  zIndex: 300_000,
  variants: {
    show: {
      true: {
        opacity: 1,
        y: 0,
      },
      false: {
        opacity: 0,
        y: -TOP_NAV_HEIGHT,
      },
    },
  },
});
