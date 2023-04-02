import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
if (typeof window.URL.createObjectURL === 'undefined') {
  // mock window methods
  window.URL.createObjectURL = (obj: Blob | MediaSource) => typeof obj;
  window.alert = (message: string) => message;
}
