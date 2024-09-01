module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|webp|svg|ogg|mp3)$': '<rootDir>/__mocks__/fileMock.js',
    },
};
