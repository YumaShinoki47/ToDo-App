import React from 'react';
import type { FilterType } from '../types/Todo';
import './TodoFilter.css';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'すべて' },
    { key: 'active', label: '未完了' },
    { key: 'completed', label: '完了済み' },
  ];

  return (
    <div className="todo-filter">
      <div className="filter-stats">
        <span className="stats-text">
          {activeCount > 0 ? `${activeCount}個のタスクが残っています` : 'すべてのタスクが完了しました！'}
        </span>
      </div>
      
      <div className="filter-buttons">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`filter-btn ${currentFilter === key ? 'active' : ''}`}
            aria-pressed={currentFilter === key}
          >
            {label}
          </button>
        ))}
      </div>
      
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="clear-btn"
          aria-label={`${completedCount}個の完了済みタスクを削除`}
        >
          完了済みを削除 ({completedCount})
        </button>
      )}
    </div>
  );
};
