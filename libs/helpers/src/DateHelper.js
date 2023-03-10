import moment from 'moment';

export const getCustomDateTime = (
  value = 0,
  unit = 'days',
  format = 'YYYY-MM-DD',
) => {
  if (value === 0) {
    return moment().format(format);
  } else {
    return moment().add(value, unit).format(format);
  }
};
export const getFormattedDateTime = (
  value = 0,
  unit = 'days',
  format = 'YYYY-MM-DD',
) => {
  if (value === 0) {
    return moment().format(format);
  } else {
    return moment().add(value, unit).format(format);
  }
};

export const getTimeFromNow = (date) => {
  const timestamp = moment(date).format('X');
  const newDate = moment.unix(timestamp);
  return moment(newDate).fromNow();
};

export const convertSecondsToTime = (durantion) => {
  let minutes = Math.floor(durantion / 60);
  let seconds = Math.floor(durantion - minutes * 60)
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}