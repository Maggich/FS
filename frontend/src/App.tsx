// import Header from "./Components/Header/header"
// import CourseCard from "./Components/CourseCard/coursecard"
// import LessonCard from "./Components/LessonCard/lessoncard"
// import { useState } from "react"
// import type { Lesson } from './types'

// function App() {
//   const [count, setCount] = useState(10);
//   const [ text, setText ] = useState("Темная")
//   const lessons: Lesson[] = [
//     { id: 1, title: "TSX", level: "Базовый" },
//     { id: 2, title: "Props", level: "Базовый" },
//     { id: 3, title: "State", level: "Средний старт" },
//   ];

//   return (
//     <>
//       <Header />
//       <CourseCard />

//       <LessonCard
//         title="TSX и компоненты"
//         level="Базовый"
//         description="Учимся собирать экран из частей."
//       />

//       <div>
//         <h1>Счетчик React</h1>
//         <p>Текущее значение: {count}</p>

//         <button onClick={() => setCount(count + 1)}>+1</button>
//         <button onClick={() => setCount(count - 1)}>-1</button>
//         <button onClick={() => setCount(0)}>Сбросить</button>

//         <h1>Поменяй тему</h1>
//         <h3>Тема: {text}</h3>
//         <button onClick={() => setText("Светлая")}>Поставить светлую</button>
//         <button onClick={() => setText("Темная")}>Поставить Темную</button>

//       </div>


//     </>
//   )
// }

// export default App



import { useState, type FormEvent } from "react";
import ProfileCard from "././Components/ProfileCard/ProfileCard";


function App() {
  const [note, setNote] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!note.trim()) {
      setSavedMessage("Сначала введи текст заметки.");
      return;
    }

    setSavedMessage(`Заметка сохранена: ${note}`);
    setNote("");
  }

  return (
    <>
      <div>
        <h1>Форма заметки</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введи заметку"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />

          <button type="submit">Сохранить</button>
        </form>

        <p>Текущий ввод: {note}</p>
        <p>{savedMessage}</p>
      </div>

      <div>
        <h1>Стили в React</h1>
        <ProfileCard />
      </div>
    </>
  );
}

export default App;