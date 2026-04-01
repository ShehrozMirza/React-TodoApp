import { useState } from 'react';
import styles from './todoitem.module.css';

function formatDate(dateStr) {
  if (!dateStr) return null;
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function isOverdue(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dateStr + 'T00:00:00');
  return due < today;
}

export default function TodoItem({ item, todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  function handleDelete() {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  }

  function handleToggle() {
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handleEdit() {
    if (editText.trim() === '') return;
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, text: editText.trim() } : todo,
      ),
    );
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleEdit();
    if (e.key === 'Escape') {
      setEditText(item.text);
      setIsEditing(false);
    }
  }

  const overdue = !item.completed && isOverdue(item.dueDate);

  return (
    <div
      className={`${styles.item} ${item.completed ? styles.itemCompleted : ''} ${overdue ? styles.itemOverdue : ''}`}
    >
      <div className={styles.itemContent}>
        <button
          className={`${styles.checkbox} ${item.completed ? styles.checked : ''}`}
          onClick={handleToggle}
          aria-label={item.completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {item.completed && '✓'}
        </button>

        <div className={styles.textGroup}>
          {isEditing ? (
            <input
              className={styles.editInput}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleEdit}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          ) : (
            <span
              className={`${styles.itemText} ${item.completed ? styles.completedText : ''}`}
              onDoubleClick={() => !item.completed && setIsEditing(true)}
              title={!item.completed ? 'Double-click to edit' : undefined}
            >
              {item.text}
            </span>
          )}
          {item.dueDate && (
            <span className={`${styles.dueDate} ${overdue ? styles.dueDateOverdue : ''}`}>
              {overdue ? '⚠ Overdue · ' : '📅 '}
              {formatDate(item.dueDate)}
            </span>
          )}
        </div>

        <span className={`${styles.priorityBadge} ${styles[item.priority]}`}>
          {item.priority}
        </span>

        <div className={styles.actions}>
          {!item.completed && !isEditing && (
            <button
              className={styles.editButton}
              onClick={() => setIsEditing(true)}
              aria-label="Edit todo"
            >
              ✏
            </button>
          )}
          <button className={styles.deleteButton} onClick={handleDelete} aria-label="Delete todo">
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
