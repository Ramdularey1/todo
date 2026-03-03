import React, { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  function addTask(e) {
    e.preventDefault()
    if (!text.trim()) return
    setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false }])
    setText('')
  }

  function toggle(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function remove(id) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="New task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map(t => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              {t.text}
            </label>
            <button onClick={() => remove(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

