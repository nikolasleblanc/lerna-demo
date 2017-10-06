import { getTeamName } from '@nik/teamnames';
import { getCityName } from '@nik/citynames';

export const nameotron = () => {
  const cityName = getCityName();
  const teamName = getTeamName();
  return `${cityName} ${teamName}`;
};
