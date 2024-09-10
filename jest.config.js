module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|avif|webp|svg|ogg|mp3|scss)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
