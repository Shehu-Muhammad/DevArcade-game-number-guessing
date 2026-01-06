interface Props {
  instructions: string[];
}

const List = ({ instructions }: Props) => {
  return (
    <>
      <ul>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
