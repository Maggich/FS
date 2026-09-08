import Header from "./Components/Header/header"
import CourseCard from "./Components/CourseCard/coursecard"
import LessonCard from "./Components/LessonCard/lessoncard"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(10);
  const [ text, setText ] = useState("Темная")

  return (
    <>
      <Header />
      <CourseCard />

      <LessonCard
        title="TSX и компоненты"
        level="Базовый"
        description="Учимся собирать экран из частей."
      />

      <div>
        <h1>Счетчик React</h1>
        <p>Текущее значение: {count}</p>

        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Сбросить</button>

        <h1>Поменяй тему</h1>
        <h3>Тема: {text}</h3>
        <button onClick={() => setText("Светлая")}>Поставить светлую</button>
        <button onClick={() => setText("Темная")}>Поставить Темную</button>

      </div>
    </>
  )
}

export default App
