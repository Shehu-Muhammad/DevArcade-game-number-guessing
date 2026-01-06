interface Props {
  name: string;
}

const Button = ({ name }: Props) => {
  return (
    <button className='btn btn-primary mx-2' type='submit'>
      {name}
    </button>
  );
};

export default Button;
