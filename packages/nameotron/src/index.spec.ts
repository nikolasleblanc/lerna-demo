import { nameotron } from './index';
import { getCityName } from '@nik/citynames';
import { getTeamName } from '@nik/teamnames';

describe('nameotron', () => {  
  it('should return Ottawa Senators', () => {
    expect(nameotron()).toBe(`Ottawa Senators`);
  });

  it('should return Ottawa from @nik/citynames', () => {
    expect(getCityName()).toBe('Ottawa');
  });
  
  it('should return Ottawa from @nik/teamnames', () => {
    expect(getTeamName()).toBe('Senators');
  });
});
