import { useState } from 'react'
import type { FilterType } from './types/Todo'
import { useLocalStorage } from './hooks/useLocalStorage'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { TodoFilter } from './components/TodoFilter'
import './App.css'

function App() {
  const [filter, setFilter] = useState<FilterType>('all')
  const { todos, addTodo, toggleTodo, editTodo, deleteTodo, clearCompleted } = useLocalStorage()

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">📝 ToDoアプリ</h1>
        <p className="app-subtitle">タスクを管理して生産性を向上させましょう</p>
      </header>
      
      <main className="app-main">
        <div className="todo-container">
          <TodoForm onAdd={addTodo} />
          
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onEdit={editTodo}
            onDelete={deleteTodo}
          />
          
          {todos.length > 0 && (
            <TodoFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={clearCompleted}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
