import { _sum, _toLowwerCase, _sumWithInitial } from '.';

describe('Test Logic', () => {
    it('should sum correctly' , () => {
        expect(_sum(2, 3)).toBe(2 + 3);
    });

    it('should lowwer case correctly' , () => {
        expect(_toLowwerCase('AAA')).toEqual('aaa');
    });

    it('should reduce with initial', () => {
        expect(_sumWithInitial(100, [1, 2, 3, 4])).toBe(110);
    });
 });