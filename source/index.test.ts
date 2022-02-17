import * as index from './index';

describe('index', () => {
    it('says hello', () => {
        console.log = jest.fn();
        index.main();
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith("Hello, World!");
    });
});
