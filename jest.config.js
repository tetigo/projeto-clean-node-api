module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'corerage',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
}