interface Props {
  name: string;
  className?: string;
  handleClick: () => void;
  disabled?: boolean;
}

const Button = ({ name, className, handleClick, disabled }: Props) => {
  return (
    <button
      className={className ?? 'btn btn-primary'}
      type='submit'
      onClick={handleClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
