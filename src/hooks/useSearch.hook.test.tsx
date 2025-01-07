import SearchProvider from '@/providers/SearchProvider';
import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { describe, expect, it } from 'vitest';
import useSearch from './useSearch.hook';

describe('useSearch Hook', () => {
  it('should return the context value when used within the SearchProvider', () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: ({ children }) => <SearchProvider>{children}</SearchProvider>,
    });

    expect(result.current.query).toEqual('');
    expect(result.current.offset).toEqual(1);
  });

  it('should udpate the query state when setQuery is called', () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: ({ children }) => <SearchProvider>{children}</SearchProvider>,
    });

    act(() => {
      result.current.setQuery('test');
    });

    expect(result.current.query).toEqual('test');
  });

  it('should udpate the offset state when setOffset is called', () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: ({ children }) => <SearchProvider>{children}</SearchProvider>,
    });

    act(() => {
      result.current.setOffset(2);
    });

    expect(result.current.offset).toEqual(2);
  });

  it('should throw an error outside of the SearchProvider', () => {
    const { result } = renderHook(() => {
      try {
        useSearch();
      } catch (error) {
        return error;
      }
    });
    expect(result).toThrowError(new Error('obj is not a function'));
  });
});
