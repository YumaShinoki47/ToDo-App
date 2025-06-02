import React, { useState } from 'react';
import './TodoForm.css';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="新しいタスクを入力してください..."
          className="todo-input"
          aria-label="新しいタスクを入力"
          autoFocus
        />
        <button
          type="submit"
          className="add-btn"
          disabled={!text.trim()}
          aria-label="タスクを追加"
        >
          追加
        </button>
      </div>
    </form>
  );
};
