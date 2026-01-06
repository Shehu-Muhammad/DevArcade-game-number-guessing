import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import List from './components/List';
import Message from './components/Message';
import Title from './components/Title';

function App() {
  const gameInstructions = [
    'Enter the range of numbers you want the target number to be between, and press New Target',
    'Enter your guess',
    'See if your guess is too high or too low',
    'Change your guess',
    'The app will tell you when you are right, and how many guesses you had',
  ];
  return (
    <>
      <Title tag='h1' title='Number Guessing Game' />
      <Message message='Guess a number' />
      <Input />
      <Input />
      <Button name='New Target' />
      <Message message='The number is greater than X' />
      <Input />
      <Button name='Guess' />
      <Title tag='h3' title='Instructions' />
      <List instructions={gameInstructions} />
    </>
  );
}

export default App;
