import { styled, Button, ButtonText } from 'tamagui';
import { useLink } from 'solito/link';

export type NavItem = {
  icon: React.NamedExoticComponent;
  text: string;
  link: string;
  isActive?: boolean;
};

const NavLinkWrapper = styled(Button, {
  name: 'NavLink',
  bc: '$backgroundTransparent',
  color: 'white',
  flexDirection: 'column',
  theme: 'Button',
  variants: {
    active: {
      true: {
        color: '$blue10',
        fontWeight: '700',
      },
    },
  },
});

const ButtonTextWrapper = styled(ButtonText, {
  variants: {
    active: {
      true: {
        color: '$blue10',
        fontWeight: '700',
      },
    },
  },
});

interface NavLinkProps {
  item: NavItem;
}

export const NavLink: React.FC<NavLinkProps> = ({
  item: { icon, isActive, text, link },
}) => {
  const linkProps = useLink({
    href: link,
  });

  return (
    <NavLinkWrapper icon={icon} active={isActive} {...linkProps}>
      <ButtonTextWrapper active={isActive}>{text}</ButtonTextWrapper>
    </NavLinkWrapper>
  );
};
