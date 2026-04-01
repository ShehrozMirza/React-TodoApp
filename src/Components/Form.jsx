import { useState } from 'react';
import styles from './form.module.css';

const MAX_LENGTH = 120;

export default function Form({ todos, setTodos }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  const remaining = MAX_LENGTH - text.length;
  const today = new Date().toISOString().split('T')[0];

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === '') {
      setError('Please enter a todo item.');
      return;
    }
    setError('');
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false,
        priority,
        dueDate: dueDate || null,
      },
    ]);
    setText('');
    setDueDate('');
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <p className={styles.formTitle}>Add New Task</p>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => {
            if (e.target.value.length <= MAX_LENGTH) {
              setText(e.target.value);
              if (error) setError('');
            }
          }}
          value={text}
          type="text"
          placeholder="What needs to be done?"
        />
        <button className={styles.modernButton} type="submit">
          + Add
        </button>
      </div>
      {text.length > MAX_LENGTH * 0.8 && (
        <p
          className={`${styles.charCount} ${remaining <= 10 ? styles.charCountWarning : ''}`}
        >
          {remaining} characters remaining
        </p>
      )}
      <div className={styles.inputRow}>
        <select
          className={styles.prioritySelect}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">🟢 Low Priority</option>
          <option value="medium">🟡 Medium Priority</option>
          <option value="high">🔴 High Priority</option>
        </select>
        <input
          className={styles.dateInput}
          type="date"
          value={dueDate}
          min={today}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      {error && <p className={styles.errorText}>{error}</p>}
    </form>
  );
}
