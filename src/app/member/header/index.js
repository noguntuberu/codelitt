import React, { useMemo, useState } from 'react';
import styles from './header.module.css';

export const AppHeader = ({ selectedYear, selectedMonth, onYearChange, onMonthChange }) => {
  const [year] = useState(selectedYear);
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const generated_years = useMemo(() => {
    const years = [];
    for (let i = year - 50; i < year + 50; i++) {
      years.push(i);
    }

    return years;
  }, [year]);

  return <header className={styles.header}>
    <div>
      <h1>CALENDAR</h1>
    </div>
    <div className={styles.viewPicker}>
      <span className="material-icons">
        event
      </span>
      <select
        onChange={e => onYearChange(e.target.value)}
        defaultValue={selectedYear}
      >
        {generated_years.map(year => (<option
          key={year}
          value={year}
        >
          {year}
        </option>))}
      </select>
      <select
        onChange={e => onMonthChange(Number(e.target.value))}
        defaultValue={selectedMonth}
      >
        {MONTHS.map((month, index) => (<option
          key={month}
          value={index + 1}
        >
          {month}
        </option>))}
      </select>
    </div>
  </header>
}