interface Props {
  instructions: string[];
}

const List = ({ instructions }: Props) => {
  return (
    <>
      <ul>
        {instructions.map((instruction) => (
          <li>{instruction}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
