export const changeReporterFormat = (originForm: string) => {
  if (originForm !== null) {
    const removeUnnecessaryText = originForm.substring(3);
    const changeForm = removeUnnecessaryText.split(",");
    const result = changeForm[0];
    return result;
  } else {
    return "Author Unknown";
  }
};
