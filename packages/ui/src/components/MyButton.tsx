import {
  Button,
  ButtonText,
  styled,
  ButtonProps,
  TextPropsBase,
  Paragraph,
} from 'tamagui';
import { useLink } from 'solito/link';

const StyledButton = styled(Button, {});

type BaseProps = {
  text?: string;
  textProps?: TextPropsBase;
  isActive?: boolean;
  icon?: React.ExoticComponent | React.ReactNode;
} & ButtonProps;

type JustAButtonProps = {
  onClick?: () => void | undefined;
  linkTo?: never;
} & BaseProps;

type JustALinkProps = { linkTo: string; onClick?: never } & BaseProps;

type MyButtonProps = JustAButtonProps | JustALinkProps;

const JustAButton: React.FC<JustAButtonProps> = ({
  text,
  icon,
  onClick,
  isActive,
  textProps,
  ...buttonProps
}) => {
  if (text)
    return (
      <StyledButton icon={icon} onPress={onClick} {...buttonProps}>
        <ButtonText color={buttonProps.color} {...textProps}>
          {text}
        </ButtonText>
      </StyledButton>
    );

  return (
    <StyledButton
      icon={icon}
      onPress={onClick}
      color={isActive ? '$blue10' : undefined}
      {...buttonProps}
    />
  );
};

const JustALink: React.FC<JustALinkProps> = ({
  text,
  icon,
  linkTo,
  isActive,
  textProps,
  ...buttonProps
}) => {
  const linkProps = useLink({ href: linkTo });
  console.log({ buttonProps });
  if (text)
    return (
      <StyledButton
        icon={icon}
        {...linkProps}
        color={isActive ? '$blue10' : undefined}
        {...buttonProps}
      >
        <Paragraph color={isActive ? '$blue10' : undefined} {...textProps}>
          {text}
        </Paragraph>
      </StyledButton>
    );

  return (
    <StyledButton
      icon={icon}
      {...linkProps}
      color={isActive ? '$blue10' : undefined}
      {...buttonProps}
    />
  );
};

export const MyButton: React.FC<MyButtonProps> = ({
  linkTo,
  onClick,
  ...props
}) => {
  if (linkTo) return <JustALink {...props} linkTo={linkTo} />;
  return <JustAButton onClick={onClick} {...props} />;

  return null;
};
