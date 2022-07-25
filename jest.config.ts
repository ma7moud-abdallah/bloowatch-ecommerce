const nextJs = require('next/jest');

const createJestConfig = nextJs({dir: '.'});

const customJestConfig = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
}

export default createJestConfig(customJestConfig);
