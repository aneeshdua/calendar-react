import './Calendar.css'

import { startOfMonth,endOfMonth,differenceInDays, setDate, addToDate, dateDiff } from '../../helper/dateUtil';

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

type Props = {
  value?: Date;
  onChange: (date: Date) => void;
};

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;
  
  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();
  
  const prevMonth = () => onChange(addToDate(value, {months:-1, years:0, days:0}));
  const nextMonth = () => onChange(addToDate(value, { months: 1,years:0, days:0 }));
  const prevYear = () => onChange(addToDate(value, { years: -1,months:0, days:0 }));
  const nextYear = () => onChange(addToDate(value, { years: 1 ,months:0, days:0}));

  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange(date);
  };

  return (
    <div className="">
      <button onClick={prevYear}>{"<<"}</button>
        <button onClick={prevMonth}>{"<"}</button>
        <button className="col-span-3">{monthNames[value.getMonth()]} {value.getFullYear()}</button>
        <button onClick={nextMonth}>{">"}</button>
        <button onClick={nextYear}>{">>"}</button>
      <div className="calendarTable">
        
        {weeks.map((week) => (
          <button className="weekBtn">{week}</button>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => (
          <button key={index} className="prefixDaysBtn"/>
        ))}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const isCurrentDate = date === value.getDate();

          return (
            <button
              key={date}
              className={`monthDaysBtn ${isCurrentDate && "activeDateBtn"}`}
              onClick={() => handleClickDate(date)}
            >
              {date}
            </button>
          );
        })}

        {Array.from({ length: suffixDays }).map((_, index) => (
          <button className="suffixDaysBtn" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;