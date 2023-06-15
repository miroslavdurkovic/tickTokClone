/*
 * (C) 2023 Miroslav Durkovic. All rights reserved.
 *
 * File: TabContext.tsx
 * Description: This file contains the implementation of TabContext.
 * Author: Miroslav Durkovic
 * Date: June 15, 2023
 */

// <--- Import --->
import {createContext, Dispatch, SetStateAction} from 'react';

// <--- Types --->
interface TabContextType {
  selectedTabIndex: number;
  setSelectedTabIndex: Dispatch<SetStateAction<number>>;
}

// <--- Context --->
export const TabContext = createContext<TabContextType>({
  selectedTabIndex: 0,
  setSelectedTabIndex: () => {},
});
