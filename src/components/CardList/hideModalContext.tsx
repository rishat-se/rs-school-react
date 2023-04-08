import { createContext } from 'react';

export const hideModalContext = createContext((e: React.MouseEvent<HTMLElement, MouseEvent>) => {});
