import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addReminder, updateReminder } from '../../../store/actions/reminder';
import styles from './sidenav.module.css';

export const SideNav = ({ onDiscard, ...props }) => {
  const dispatch = useDispatch();

  const {
    id: reminder_id,
    title: reminder_title,
    form_date: reminder_date,
    start_time: reminder_start_time,
    color: reminder_color,
  } = props;

  const [id, setId] = useState();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [start_time, setStartTime] = useState('');
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    setId(reminder_id);
    setTitle(reminder_title || '');
    setDate(reminder_date || '');
    setStartTime(reminder_start_time || '');
    setColor(reminder_color || '#13a8ed');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reminder_id])

  const discard = () => {
    setId(() => undefined);
    setTitle(() => '');
    setDate(() => '');
    setStartTime(() => '');
    setColor(() => '#13a8ed');
    onDiscard({});
  }

  const submit = () => {
    if (title && title.length > 30) {
      toast.error('Title is limited to 30 characters.');
      return;
    }
    let data = {
      title,
      start_time,
      color,
      date: new Date(date).toDateString(),
      form_date: date,
      id: `${date}-${Date.now()}`,
    };

    if (id) {
      data = {
        edited: data,
        old: { ...props }
      }
      dispatch(updateReminder(data));
      toast.success('update successful');
      return;
    }

    dispatch(addReminder(data));
    toast.success('Reminder added');
  };

  return <aside className={`${styles.sidenav}`}>
    <div className={styles.formRow}>
      <input type="text" placeholder="Add Reminder Title" value={title} onInput={e => setTitle(e.target.value)} />
      <input className={styles.datePicker} type="color" value={color} onChange={e => setColor(e.target.value)} />
    </div>
    <div className={styles.formRow}>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      &nbsp;&nbsp;
      <input type="time" value={start_time} onChange={e => setStartTime(e.target.value)} />
    </div>
    <div className={`${styles.formRow} ${styles.btnRow}`}>
      <button className={styles.cancelBtn} type="button" onClick={discard}>Discard</button>
      <button
        className={styles.saveBtn}
        type="button"
        disabled={!title || !date || !start_time}
        onClick={submit}
      >Save</button>
    </div>
  </aside>
}