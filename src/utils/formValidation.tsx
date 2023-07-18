export const checkInputText = (value: string): boolean => {
  const regex = /^[a-zA-Z\s]*$/;
  return !!value && value.length > 2 && regex.test(value);
};
