import CronParser from 'cron-parser';

export const checkCron = text => {
  return Object.keys(CronParser.parseString(text || '').errors).length !== 0
};
export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
};

