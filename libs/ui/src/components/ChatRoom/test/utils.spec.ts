import { describe, expect, test } from 'vitest';
import { isWithinOneMinute } from '../utils';

describe('util test', () => {
  describe('isWithinOneMinute', () => {
    test('두 시간이 동일한 1분 내에 있는지?', () => {
      const t1 = '2024-12-31T23:59:33.444Z';
      const t2 = '2024-12-31T23:59:59.999Z';

      expect(isWithinOneMinute(t1, t2)).toEqual(true);
    });

    test('두 시간이 동일한 1분 내에 있는지?', () => {
      const t1 = '2024-12-31T23:59:33.444Z';
      const t2 = '2025-01-01T00:00:00.000Z';

      expect(isWithinOneMinute(t1, t2)).toEqual(false);
    });

    test('포맷이 잘못된 경우에는 false 를 반환합니다.', () => {
      const t1 = '2024-12-31T23:59:33';
      const t2 = '2024-12-31T23:59:59.999Z';

      expect(isWithinOneMinute(t1, t2)).toEqual(false);
    });
  });
});
