import React from 'react';
import type { Todo, FilterType } from '../types/Todo';
import { TodoItem } from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  filter,
  onToggle,
  onEdit,
  onDelete,
}) => {
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p className="empty-text">タスクがありません</p>
        <p className="empty-subtext">上のフォームから新しいタスクを追加しましょう</p>
      </div>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <p className="empty-text">
          {filter === 'active' && '未完了のタスクはありません'}
          {filter === 'completed' && '完了済みのタスクはありません'}
        </p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
