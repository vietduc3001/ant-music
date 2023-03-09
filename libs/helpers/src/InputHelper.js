/* eslint-disable no-useless-escape */

export const validatePassword = (
  rule,
  value,
  callback,
  message = 'Mật khẩu phải chứa ít nhất 1 kí tự, 1 chữ cái viết hoa và 1 số',
) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  const isValid = regex.test(value);

  if (value && !isValid) {
    callback(message);
  } else {
    callback();
  }
};

export const validateEmail = (
  rule,
  value,
  callback,
  message = 'Vui lòng nhập đúng định dạng email',
) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = regex.test(value);

  if (value && !isValid) {
    callback(message);
  } else {
    callback();
  }
};
