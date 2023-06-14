import {createContext, Dispatch, SetStateAction} from 'react';

interface TabContextType {
  selectedTabIndex: number;
  setSelectedTabIndex: Dispatch<SetStateAction<number>>;
}

export const TabContext = createContext<TabContextType>({
  selectedTabIndex: 0,
  setSelectedTabIndex: () => {},
});
