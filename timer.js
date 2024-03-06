const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const giveawayMessage = document.getElementById('giveaway_message');

let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10); // Initial target date is 9 days from now

const updateTimer = () => {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference < 0) {
        targetDate.setDate(targetDate.getDate() + 1); // Move the target date by 1 day
        updateTimer(); // Recursively call updateTimer to recalculate time difference
        return;
    }

    // calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }

    // Displaying the timer
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);

    // Update giveaway message
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedEndDate = targetDate.toLocaleDateString('en-US', options);
    giveawayMessage.textContent = `Giveaway Ends On ${formattedEndDate} by 11:59pm. `;
}

// Initial call to update the timer
updateTimer();

// Update timer every second
setInterval(updateTimer, 1000);