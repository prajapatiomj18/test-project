import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,
  timeout: 30000,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],

  use: {
    headless: true,
    trace: 'on-first-retry',
  },

  projects: process.env.CI
    ? [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
      ]
    : [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } },
      ],
});