import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { useEffect, useState } from "react";
import { FilterSetProps } from "../../models/flterProps";

import { dateFilterInputText } from "../../constants/aboutComponents/aboutFilterModal";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = (props: FilterSetProps) => {
  const { filterState, filterStateFunc, dispatch } = props;
  const initialState = filterState === "" ? null : new Date(filterState as string);
  const [startDate, setStartDate] = useState(initialState);

  useEffect(() => {
    const date = startDate === null ? "" : changeDateForm(startDate);
    dispatch(filterStateFunc(date));
  }, [startDate]);

  return (
    <DatePicker
      locale={ko}
      selected={startDate}
      onChange={(date: Date | null) => setStartDate(date)}
      dateFormat="yyyy.MM.dd"
      value={filterState as string}
      placeholderText={dateFilterInputText}
    />
  );
};

export default Calendar;

// change date form to 'yyyy.mm.dd'
const changeDateForm = (dateObj: Date) => {
  const date = new Date(dateObj);
  const yyyy = date.getFullYear();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  const dd = date.getDate().toString().padStart(2, "0");

  return `${yyyy}.${mm}.${dd}`;
};
