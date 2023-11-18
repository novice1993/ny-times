const transformDateForm = (dateObj: any) => {
  const date = new Date(dateObj);
  const yyyy = date.getFullYear();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  const dd = date.getDate().toString().padStart(2, "0");

  return `${yyyy}.${mm}.${dd}`;
};

export default transformDateForm;
