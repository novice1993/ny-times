const changeReporterFormat = (originForm: string) => {
  const removeUnnecessaryText = originForm.substring(3);
  const changeForm = removeUnnecessaryText.split(",");
  const result = changeForm[0];
  return result;
};

export default changeReporterFormat;
