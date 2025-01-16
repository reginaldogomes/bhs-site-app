import TagManager from 'react-gtm-module';

export const initGTM = (gtmId: string) => {
  if (typeof window !== 'undefined') {
    TagManager.initialize({ gtmId });
  }
};
