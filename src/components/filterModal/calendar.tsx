import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import transformDateForm from "../../utils/transformDateForm";

import { FilterSetProps } from "../../models/flterProps";
import { dateFilterInputText } from "../../constants/constatns";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = (props: FilterSetProps) => {
  const { filterState, filterStateFunc, dispatch } = props;
  const initialState = filterState === "" ? null : new Date(filterState as string);
  const [startDate, setStartDate] = useState(initialState);

  useEffect(() => {
    console.log(filterState);

    if (startDate === null) {
      dispatch(filterStateFunc(""));
    } else {
      const date = transformDateForm(startDate);
      dispatch(filterStateFunc(date));
    }
  }, [startDate]);

  return (
    <DatePicker
      locale={ko}
      selected={startDate}
      onChange={(date: any) => setStartDate(date)}
      dateFormat="yyyy.MM.dd"
      value={filterState as string}
      placeholderText={dateFilterInputText}
    />
  );
};

export default Calendar;
