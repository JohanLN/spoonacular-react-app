import { beforeEach } from 'node:test';
import { describe, expect, it, vi } from 'vitest';
import { API_KEY, BASE_URL, MOCK } from './environment.constant';

describe('Environment Constants', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });
  // Test that BASE_URL is properly imported from env
  it('should have BASE_URL defined from environment variables', () => {
    expect(BASE_URL).toBeDefined();
    expect(typeof BASE_URL).toBe('string');
  });

  // Test that API_KEY is properly imported from env
  it('should have API_KEY defined from environment variables', () => {
    expect(API_KEY).toBeDefined();
    expect(typeof API_KEY).toBe('string');
  });

  // Test that MOCK is properly imported and converted to boolean
  it('should have MOCK defined as boolean from environment variables', () => {
    expect(MOCK).toBeDefined();
    expect(typeof MOCK).toBe('boolean');
  });
});
