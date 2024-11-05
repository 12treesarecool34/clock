function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;  // The hour '0' should be '12'
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}`;

    document.getElementById('time').textContent = timeString;
    document.getElementById('ampm').textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock();
