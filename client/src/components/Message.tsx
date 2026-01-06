interface Props {
  message: string;
}

const Message = ({ message }: Props) => {
  return <p className='mx-3'>{message}</p>;
};

export default Message;
