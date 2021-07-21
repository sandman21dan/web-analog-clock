import { hourToDeg, minSecToDeg } from '../time';

describe('hourToDeg', () => {
    it('converts 3 to 90', () => {
        expect(hourToDeg(3)).toEqual(90);
    });

    it('converts 9 to 270', () => {
        expect(hourToDeg(9)).toEqual(270);
    });

    it('converts 15 to 450', () => {
        expect(hourToDeg(15)).toEqual(450);
    });
});

describe('minSecToDeg', () => {
    it('converts 30 to 180', () => {
        expect(minSecToDeg(30)).toEqual(180);
    });

    it('converts 60 to 360', () => {
        expect(minSecToDeg(60)).toEqual(360);
    });

    it('converts 15 to 90', () => {
        expect(minSecToDeg(15)).toEqual(90);
    });
});
