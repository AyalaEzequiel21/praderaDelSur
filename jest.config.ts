export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
    transformIgnorePatterns: [
        '/node_modules/(?!.*\\.(js|jsx|ts|tsx)$)', // Ignorar archivos binarios en node_modules
        '^.+\\.module\\.(css|sass|scss)$', // Ignorar archivos CSS/Sass modules
    ],
  };
  