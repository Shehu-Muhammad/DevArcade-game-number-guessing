interface Props {
  name: string;
  handleClick: () => void;
}

const Button = ({ name, handleClick }: Props) => {
  return (
    <button
      className='btn btn-primary mx-2'
      type='submit'
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
