export function getTimeParts(): [number, number, number] {
    const time = new Date();

    return [
        time.getHours(),
        time.getMinutes(),
        time.getSeconds(),
    ]
}

export function hourToDeg(hour: number): number {
    return hour * 360 / 12;
}

export function minSecToDeg(minSec: number): number {
    return minSec * 360 / 60;
}
