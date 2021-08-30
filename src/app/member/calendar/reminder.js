import React from 'react';
import styles from './calendar.module.css';

export const SimpleReminder = ({ reminder, onEdit }) => {
  const style = {
    backgroundColor: `${reminder.color}30`,
    color: reminder.color,
  };

  return (<div
    key={reminder.id}
    className={styles.reminder}
    onClick={() => onEdit(reminder)}
    style={style}
  >
    {reminder.title && `${reminder.title.substr(0, 30)}`}
  </div>)
};

export const AdvancedReminder = ({ reminder, onEdit, onDelete }) => (<div
  className={styles.reminderWrapper}
>
  <div>
    <SimpleReminder reminder={reminder} onEdit={() => { }} />
  </div>
  <span className="material-icons" onClick={() => onEdit(reminder)}>
    edit
  </span>
  <span className="material-icons" onClick={() => onDelete(reminder)}>
    delete
  </span>
</div>);