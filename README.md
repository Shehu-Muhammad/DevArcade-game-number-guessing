# 🎯 Number Guessing Game

A simple React + TypeScript number guessing game where users define a range, generate a random target number, and try to guess it with helpful feedback.

---

## 🚀 Features

* Set a **custom number range** (lower & upper bounds)
* Generate a **random target number** within the range
* Enter guesses using **number-only inputs**
* Get feedback if your guess is:

  * Too high
  * Too low
  * Out of bounds
  * Correct 🎉
* Clean, reusable components (`Input`, `Button`, `Message`, etc.)
* Fully **type-safe** using TypeScript

---

## 🛠️ Tech Stack

* **React** (Vite)
* **TypeScript**
* **CSS** (basic styling)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── List.tsx
│   ├── Message.tsx
│   └── Title.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🧠 How the Game Works

1. Enter a **lower** and **upper** bound
2. Click **New Target** to generate a random number
3. Enter your guess
4. Click **Guess** to receive feedback
5. Keep guessing until you win 🎯

---

## 🧩 Controlled Number Inputs (Important)

All number inputs are **controlled components**:

* Input values are rendered as `number | ''`
* DOM input values are converted from `string → number`
* Prevents React and TypeScript errors

Example pattern:

```tsx
<Input
  type="number"
  value={guess ?? ''}
  onChange={(e) => setGuess(Number(e.target.value))}
/>
```

---

## ▶️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:5173
```

---

## 📌 Possible Improvements

* Guess counter
* Guess history list
* Reset game button
* Difficulty presets (Easy / Medium / Hard)
* Styling with Tailwind or CSS Modules

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Built as a learning project to practice:

* React state management
* Controlled inputs
* TypeScript typing
* Component reusability

Happy guessing! 🎉
