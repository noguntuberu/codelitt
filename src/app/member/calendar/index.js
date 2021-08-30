/* eslint-disable no-loop-func */
import React from 'react';
import { CalendarDay} from './day';
import styles from './calendar.module.css';

export const Calendar = ({ year, month, onEditReminder }) => {
  const dayIsBeyondLastDayInMonth = (year, month, day) => {
    const date = new Date(`${month}/${day || 1}/${year}`);
    return month === (date.getMonth() + 1);
  }

  const buildDays = (month, year) => {
    const date = (new Date(`${month}/01/${year}`));
    const [day] = date
      .toDateString()
      .split(' ');

    const days = {
      'Sun': [], 'Mon': [], 'Tue': [], 'Wed': [], 'Thu': [], 'Fri': [], 'Sat': [],
    };

    let day_number = 0, is_first_day_found = false;
    let limit = date.getDay() > 4 ? 6 : 5;
    for (let i = 0; i < limit; i++) {
      Object.keys(days).forEach((key) => {
        const random_key = `${year}-${Math.random() * 500}`;
        if ((!is_first_day_found && key !== day) || !dayIsBeyondLastDayInMonth(year, month, day_number)) {
          days[key][i] = <CalendarDay
            key={random_key}
            year={year}
            month={month}
            day={0}
          />
          return;
        }

        if (!is_first_day_found && key === day) {
          is_first_day_found = true;
          day_number = 1;
        }

        days[key][i] = <CalendarDay
          key={random_key}
          year={year}
          month={month}
          day={day_number}
          onEdit={onEditReminder}
        />
        day_number++;
      });
    }

    let weeks = [[], [], [], [], [], []];
    for (let i = 0; i < limit; i++) {
      weeks[i] = Object.keys(days).reduce((sac, day) => {
        return [...sac, days[day][i]];
      }, []);
    }

    return weeks.filter(week => week.length >= 1);
  }

  return <main className={styles.wrapper}>
    <div>
      <div className={styles.heading}>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className={styles.content}>
        {buildDays(month, year).map((week, index) => <div className={styles.week} key={`${week}-${index}`}>
          {week}
        </div>)}
      </div>
    </div>
  </main>
}