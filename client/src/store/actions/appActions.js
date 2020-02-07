// Action types
export const HOME_ON = 'HOME_ON';
export const HOME_OFF = 'HOME_OFF';

export const homeOn = () => ({
  type: HOME_ON,
  payload: true
});

export const homeOff = () => ({
    type: HOME_OFF,
    payload: false
  });