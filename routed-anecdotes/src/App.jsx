import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import HeaderAndFooter from './layout/HeaderAndFooter';
import About from './components/About';
import CreateNew from './components/CreateNew';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteSingle from './components/AnecdoteSingle';
const App = () => {

  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`Successfull created ${anecdote.author}`)
  }

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderAndFooter notification={notification} />}>
      <Route index element={<AnecdoteList anecdotes={anecdotes} />} />
      <Route path="about" element={<About />} />
      <Route path="anecdote/:id" element={<AnecdoteSingle anecdotes={anecdotes} />} />

      <Route path="create-new" element={<CreateNew addNew={addNew} />} />
    </Route>
  )
);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
