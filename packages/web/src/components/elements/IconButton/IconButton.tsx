import { ButtonProps } from '../Button';
import { IconButtonBaseProps, StyledButton } from './IconButton.styles';

type OmitButtonProps =
  | 'fullWidth'
  | 'vairant'
  | 'loadingText'
  | 'leftIcon'
  | 'rightIcon'
  | 'size';

interface IconButtonProps
  extends Omit<ButtonProps, OmitButtonProps>,
    IconButtonBaseProps {
  /** The icon to be used in the button. */
  icon?: React.ReactElement;

  /** A label that describes the button */
  ariaLabel: string;

  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  size = 'md',
  isCircle = false,
  ariaLabel,
  icon,
  ...rest
}) => {
  return (
    <StyledButton
      aria-label={ariaLabel}
      isCircle={isCircle}
      size={size}
      {...rest}
    >
      {icon}
    </StyledButton>
  );
};

export default IconButton;
