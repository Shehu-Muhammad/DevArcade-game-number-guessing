import { useState } from 'react';
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

  const [range, setRange] = useState({ lower: 0, upper: 10 });
  const [guess, setGuess] = useState<number | null>(null);
  const [target, setTargetNumber] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const generateTargetNumber = () => {
    const newTarget =
      Math.floor(Math.random() * (range.upper - range.lower + 1)) + range.lower;
    setTargetNumber(newTarget);
    setMessage(
      `New target generated between ${range.lower} and ${range.upper}`
    );
    setGuess(null); // reset guess
  };

  const checkGuess = () => {
    if (guess === null) return;

    if (guess < range.lower || guess > range.upper) {
      setMessage(`Your guess is out of bounds (${range.lower}-${range.upper})`);
    } else if (target !== null && guess < target) {
      setMessage('Too low! Try again.');
    } else if (target !== null && guess > target) {
      setMessage('Too high! Try again.');
    } else if (target !== null && guess === target) {
      setMessage(`🎉 Congratulations! You guessed the right number: ${target}`);
    }
  };

  return (
    <>
      <Title tag='h1' title='Number Guessing Game' />
      <Message message={message || 'Guess a number'} />

      <label className='mx-3'>Lower Bound:</label>
      <Input
        type='number'
        value={range.lower}
        onChange={(e) => setRange({ ...range, lower: Number(e.target.value) })}
      />

      <label className='mx-3'>Upper Bound:</label>
      <Input
        type='number'
        value={range.upper}
        onChange={(e) => setRange({ ...range, upper: Number(e.target.value) })}
      />

      <Button name='New Target' handleClick={generateTargetNumber} />

      <label className='mx-3'>Your Guess:</label>
      <Input
        type='number'
        value={guess ?? ''}
        onChange={(e) => setGuess(Number(e.target.value))}
      />
      <Button name='Guess' handleClick={checkGuess} />

      <Title tag='h3' title='Instructions' />
      <List instructions={gameInstructions} />
    </>
  );
}

export default App;
