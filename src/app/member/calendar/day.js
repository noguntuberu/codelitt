import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Modal } from '../../shared/modal/modal';
import { AdvancedReminder, SimpleReminder } from './reminder';
import { deleteReminder } from '../../../store/actions/reminder';
import styles from './calendar.module.css';

export const CalendarDay = ({ day, month, year, onEdit }) => {
  const dispatch = useDispatch();
  const [show_modal, setShowModal] = useState(false);
  const date = new Date(`${month}/${day}/${year}`).toDateString();

  const reminders = useSelector(state => Object
    .values(state.reminders[date] || {})
    .map(reminder => ({
      ...reminder,
      timestamp: new Date(`${reminder.date} ${reminder.start_time}`),
    }))
    .sort((a, b) => a.timestamp - b.timestamp)
  ) || [];


  const handleDelete = (reminder) => {
    dispatch(deleteReminder(reminder));
    toast.success('Reminder deleted successfully.')
  }

  return <div className={styles.day}>
    <h5>{Number(day) || ''}</h5>
    {(reminders.slice(0, 3)).map(reminder => <SimpleReminder
      key={reminder.id}
      onEdit={onEdit}
      reminder={reminder}
    />)}
    {reminders.length > 3 && <button
      type="button"
      className={styles.moreBtn}
      onClick={() => setShowModal(true)}
    >
      +{reminders.length - 3} more
    </button>}
    <Modal show_modal={show_modal} title={date} show_title onClose={() => setShowModal(false)}>
      <div className={styles.list}>
        {reminders.map(reminder => <AdvancedReminder
          reminder={reminder}
          key={reminder.id}
          onEdit={onEdit}
          onDelete={handleDelete}
        />)}
      </div>
    </Modal>
  </div>
}