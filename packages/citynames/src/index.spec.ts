import { getCityName } from './index';

describe('getCityName', () => {  
  it('should return Ottawa', () => {
    expect(getCityName()).toBe('Ottawa');
  });
});