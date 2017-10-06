import { getTeamName, getTeamColor } from './index';

describe('getTeamName', () => {  
  it('should return Senators', () => {
    expect(getTeamName()).toBe('Senators');
  });
});

describe('getTeamColor', () => {  
  it('should return Red', () => {
    expect(getTeamColor()).toBe('Red');
    
  });
});
