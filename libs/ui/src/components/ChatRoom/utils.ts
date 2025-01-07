import { DateTime } from 'luxon';

/**
 * 전달된 두시간이 같은 1분안에 있는지?
 * @param t1 시간, ISO 8601, 2022-11-22T11:22:33.000Z
 * @param t2 시간, ISO 8601, 2022-11-22T11:22:33.000Z
 * @return boolean
 */
export const isWithinOneMinute = (t1: string, t2: string) => {
  const _t1 = DateTime.fromISO(t1);
  const _t2 = DateTime.fromISO(t2);

  if (!_t1.isValid || !_t2.isValid) {
    return false;
  }

  return (
    _t1.set({ second: 0, millisecond: 0 }) <= _t2 &&
    _t2 <= _t1.set({ second: 59, millisecond: 999 })
  );
};
