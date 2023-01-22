import { styled, XGroup } from 'tamagui';

export const NavBar = styled(XGroup, {
  name: 'NavBar',
  bc: 'black',
  position: 'absolute',
  left: 0,
  bottom: 0,
  right: 0,
  borderRadius: 0,
  justifyContent: 'space-between',
  padding: '$4',
  height: 80,
});
