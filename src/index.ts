import { getTimeParts, hourToDeg, minSecToDeg } from "./time";

function createClockHandle({
    length = 200,
    width = 2,
    colour = 'white'
} = {}) {
    const handle = document.createElement('div');
    handle.style.position = 'absolute';
    handle.style.bottom = '0';
    handle.style.borderRadius = '2px';
    handle.style.height = `${length}px`;
    handle.style.width = `${width}px`;
    handle.style.backgroundColor = colour;
    handle.style.transformOrigin = 'center bottom';

    return handle;
}

function createClockMarker(deg: number, {
    length = 200,
    width = 2,
    colour = 'grey',
    heightRatio = 20,
} = {}) {
    const markerContainer = document.createElement('div');
    markerContainer.style.position = 'absolute';
    markerContainer.style.bottom = '0';
    markerContainer.style.display = 'flex';
    markerContainer.style.flexDirection = 'column';
    markerContainer.style.justifyContent = 'flex-start';
    markerContainer.style.height = `${length}px`;
    markerContainer.style.width = `${width}px`;
    markerContainer.style.transformOrigin = 'center bottom';
    markerContainer.style.transform = `rotate(${deg}deg)`;

    const marker = document.createElement('div');
    marker.style.borderRadius = '2px';
    marker.style.width = '100%';
    marker.style.height = `${heightRatio}%`;
    marker.style.backgroundColor = colour;

    markerContainer.appendChild(marker);

    return markerContainer;
}

function main() {
    const container = document.getElementById('container');

    if (container) {
        container.style.position = 'relative';

        for (let angle = 0; angle < 360; angle += 30) {
            let marker: HTMLDivElement;

            if (angle % 90 === 0) {
                marker = createClockMarker(angle, {
                    colour: '#aaaaaa',
                    width: 3,
                    heightRatio: 25,
                });
            } else {
                marker = createClockMarker(angle);
            }
            container.appendChild(marker);
        }

        let currentMinute: number;

        const hourHandle = createClockHandle({ length: 120, width: 3 });
        const minuteHandle = createClockHandle();
        const secondHandle = createClockHandle({ width: 1, colour: 'grey'});

        container.appendChild(hourHandle);
        container.appendChild(minuteHandle);
        container.appendChild(secondHandle);

        setInterval(() => {
            const [hour, minute, second] = getTimeParts();

            if (currentMinute != minute) {
                hourHandle.style.transform = `rotate(${hourToDeg(hour + (minute / 60))}deg)`;
                minuteHandle.style.transform = `rotate(${minSecToDeg(minute)}deg)`;
                currentMinute = minute;
            }

            secondHandle.style.transform = `rotate(${minSecToDeg(second)}deg)`;
        }, 1000);
    }
}

main();
