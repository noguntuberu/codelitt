import React, { useState } from 'react';
import { AppHeader } from './header';
import { SideNav } from './sidenav';
import { Calendar } from './calendar';

export const MemberLayout = () => {
  const [selected_year, setSelectedYear] = useState(new Date().getFullYear());
  const [selected_month, setSelectedMonth] = useState((new Date().getMonth()) + 1);
  const [reminderToEdit, setReminderToEdit] = useState({});

  return <div>
    <AppHeader
      selectedMonth={selected_month}
      selectedYear={selected_year}
      onYearChange={setSelectedYear}
      onMonthChange={setSelectedMonth}
    />
    <SideNav {...reminderToEdit} onDiscard={setReminderToEdit} />
    <Calendar
      month={selected_month}
      year={selected_year}
      onEditReminder={setReminderToEdit}
    />
  </div>
};