import { useEffect, useState } from 'react';
import confetti from '@hiseb/confetti';
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
  const [guess, setGuess] = useState<number>(0);
  const [target, setTargetNumber] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const generateTargetNumber = () => {
    const newTarget =
      Math.floor(Math.random() * (range.upper - range.lower + 1)) + range.lower;
    setTargetNumber(newTarget);
    setMessage(
      `New target generated between ${range.lower} and ${range.upper}`,
    );
    setGuess(0); // reset guess
  };

  useEffect(() => {
    if (range.lower >= range.upper) {
      setMessage('Lower bound must be less than upper bound');
    }
  }, [range]);

  const fireConfetti = () => {
    const isMobile = window.innerWidth < 768;

    confetti({
      position: { x: window.innerWidth / 2, y: 0 },
      count: isMobile ? 300 : 600,
      size: 1,
      velocity: 200,
      fade: false,
    });
  };

  const checkGuess = () => {
    if (target === null) {
      setMessage('Please click "New Target" before guessing');
      return;
    }
    if (guess < range.lower || guess > range.upper) {
      setMessage(`Your guess is out of bounds (${range.lower}-${range.upper})`);
    } else if (target !== null && guess < target) {
      setMessage(`Too low! Try again. The number is higher than ${guess}`);
    } else if (target !== null && guess > target) {
      setMessage(`Too high! Try again. The number is lower than ${guess}`);
    } else if (target !== null && guess === target) {
      setMessage(
        `🎉 Congratulations! You guessed the right number. It is ${target}`,
      );
      fireConfetti();
    }
  };

  const getAlertClass = () => {
    if (message.includes('Congratulations')) return 'alert-success';
    if (message.includes('Too low')) return 'alert-primary';
    if (message.includes('Too high')) return 'alert-danger';
    if (message.includes('out of bounds')) return 'alert-warning';
    return 'alert-secondary';
  };

  return (
    <div className='container min-vh-100 d-flex justify-content-center align-items-center'>
      <div
        className='card shadow-sm p-4'
        style={{ maxWidth: '420px', width: '100%' }}
      >
        <Title tag='h1' title='Number Guessing Game' />
        <div className={`alert ${getAlertClass()} text-center`}>
          <Message message={message || 'Click New Target to begin playing'} />
        </div>

        <div className='mb-3'>
          <label className='mx-2 form-label'>Lower:</label>
          <Input
            type='number'
            value={range.lower}
            onChange={(e) => {
              if (Number(e.target.value) >= range.upper) {
                setRange({ ...range, lower: range.upper - 1 });
              } else {
                setRange({ ...range, lower: Number(e.target.value) });
              }
            }}
          />
        </div>

        <div className='mb-3'>
          <label className='mx-2 form-label'>Upper:</label>
          <Input
            type='number'
            value={range.upper}
            onChange={(e) => {
              if (Number(e.target.value) <= range.lower) {
                setRange({ ...range, upper: range.lower + 1 });
              } else {
                setRange({ ...range, upper: Number(e.target.value) });
              }
            }}
          />
        </div>

        <Button
          name='New Target'
          handleClick={generateTargetNumber}
          className='btn btn-primary w-100 mb-3'
        />

        <div className='mb-3 '>
          <label className='mx-2 form-label'>Your Guess:</label>
          <Input
            type='number'
            value={guess ?? ''}
            onChange={(e) => setGuess(Number(e.target.value))}
          />
        </div>
        <Button
          name='Guess'
          handleClick={checkGuess}
          className='btn btn-success w-100'
          disabled={target === null}
        />

        <Title tag='h3' title='Instructions' />
        <List instructions={gameInstructions} />
      </div>
    </div>
  );
}

export default App;
