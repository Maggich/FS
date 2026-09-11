// import Header from "./Components/Header/header"
// import CourseCard from "./Components/CourseCard/coursecard"
// import LessonCard from "./Components/LessonCard/lessoncard"
// import { useState } from "react"
// import type { Lesson } from './types'

// import { useEffect, useState } from "react"

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



// import { useState, type FormEvent, useEffect } from "react";
// import ProfileCard from "././Components/ProfileCard/ProfileCard";


// function App() {
//   const [note, setNote] = useState("");
//   const [savedMessage, setSavedMessage] = useState("");
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Счетчик: ${count}`;
//   }, [count]);


//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     if (!note.trim()) {
//       setSavedMessage("Сначала введи текст заметки.");
//       return;
//     }

//     setSavedMessage(`Заметка сохранена: ${note}`);
//     setNote("");
//   }

//   return (
//     <>
//       <div>
//         <h1>Форма заметки</h1>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Введи заметку"
//             value={note}
//             onChange={(event) => setNote(event.target.value)}
//           />

//           <button type="submit">Сохранить</button>
//         </form>

//         <p>Текущий ввод: {note}</p>
//         <p>{savedMessage}</p>
//       </div>

//       <div>
//         <h1>Стили в React</h1>
//         <ProfileCard />
//       </div>
//       <div>
//         <h1>useEffect в React</h1>
//         <p>Текущее значение: {count}</p>

//         <button onClick={() => setCount(count + 1)}>+1</button>
//         <button onClick={() => setCount(count - 1)}>-1</button>
//       </div>
//     </>
//   );
// }

// export default App;


// ЭТО РЕАЛИЗАЦИЯ GET
// import axios from "axios";
// import { useEffect, useState } from "react";

// type Post = {
//   id: number;
//   title: string;
// };

// function App() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function loadPosts() {
//       try {
//         const response = await axios.get<Post[]>(
//           "https://jsonplaceholder.typicode.com/posts?_limit=3"
//         );

//         setPosts(response.data);
//       } catch (err) {
//         const message =
//           err instanceof Error ? err.message : "Неизвестная ошибка";
//         setError(message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadPosts();
//   }, []);

//   if (loading) {
//     return <p>Идет загрузка...</p>;
//   }

//   if (error) {
//     return <p>Ошибка: {error}</p>;
//   }

//   return (
// 	    <div>
//       <h1>Список постов</h1>

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// import axios from "axios";
// import { useState } from "react";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// };

// function App() {
//   const [title, setTitle] = useState("");
//   const [result, setResult] = useState("");

//   async function createPost() {
//     try {
//       const newPost = {
//         title: title,
//         body: "Текст нового поста",
//         userId: 1,
//       };

//       const response = await axios.post<Post>(
//         "https://jsonplaceholder.typicode.com/posts",
//         newPost
//       );

//       setResult(`Пост создан: ${response.data.title}`);
//       setTitle("");
//     } catch (err) {
//       const message =
//         err instanceof Error ? err.message : "Неизвестная ошибка";

//       setResult(`Ошибка: ${message}`);
//     }
//   }

//   return (
//     <div>
//       <h1>Создание поста</h1>

//       <input
//         type="text"
//         placeholder="Введите заголовок"
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//       />

//       <button onClick={createPost}>Создать</button>

//       <p>{result}</p>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import api from './api';

interface Product {
  id: number;
  title: string;
  price: number;
}

function App() {

  const [ products, setProducts ] = useState<Product[]>([]);

  useEffect(() => {
    api.get<Product[]>('/products/')
      .then((response) => {
        setProducts(response.data);
      });
  }, []); 


  return (
    <>
      <div>
        <h1>Products</h1>

        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>

            <p>{product.price}</p>
          </div>
        ))}

      </div>
    </>
  )
}
export default App