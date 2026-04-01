import { useState } from 'react';
import TodoItem from './TodoItem';
import styles from './todolist.module.css';

export default function TodoList({ todos, setTodos, filter, setFilter }) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.length - completedCount;
  const progressPct = todos.length === 0 ? 0 : Math.round((completedCount / todos.length) * 100);

  const filtered = todos
    .filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'priority') {
        const order = { high: 0, medium: 1, low: 2 };
        return order[a.priority] - order[b.priority];
      }
      if (sort === 'name') return a.text.localeCompare(b.text);
      if (sort === 'dueDate') {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return 0;
    });

  function clearCompleted() {
    setTodos(todos.filter((t) => !t.completed));
  }

  return (
    <div className={styles.list}>
      {/* Progress bar */}
      <div className={styles.progressSection}>
        <div className={styles.progressLabel}>
          <span>
            {completedCount} of {todos.length} completed
          </span>
          <span>{progressPct}%</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      {/* Search + sort toolbar */}
      <div className={styles.toolbar}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="🔍 Search todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className={styles.sortSelect}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort: Default</option>
          <option value="priority">Sort: Priority</option>
          <option value="name">Sort: Name</option>
          <option value="dueDate">Sort: Due Date</option>
        </select>
      </div>

      {/* Filter tabs */}
      <div className={styles.filterBar}>
        {['all', 'active', 'completed'].map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.activeFilter : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            <span className={styles.filterCount}>
              {f === 'all' && todos.length}
              {f === 'active' && activeCount}
              {f === 'completed' && completedCount}
            </span>
          </button>
        ))}
      </div>

      {/* Todo items */}
      <div className={styles.items}>
        {todos.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>📝</span>
            <p>No todos yet. Add one above!</p>
          </div>
        ) : filtered.length === 0 ? (
          <p className={styles.emptyFilter}>
            {search ? `No results for "${search}"` : `No ${filter} todos.`}
          </p>
        ) : (
          filtered.map((item) => (
            <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />
          ))
        )}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.count}>
          {activeCount} item{activeCount !== 1 ? 's' : ''} left
        </span>
        {completedCount > 0 && (
          <button className={styles.clearBtn} onClick={clearCompleted}>
            Clear completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  );
}
