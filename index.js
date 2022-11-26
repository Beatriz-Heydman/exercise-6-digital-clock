const daysOfTheWeek = document.querySelector(".days_of_the_week");
const dateElement = document.querySelector(".date");
const date = new Date();
let weekDaysNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const currentDay = weekDaysNames[date.getDay()];
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

daysOfTheWeek.innerHTML = currentDay;

dateElement.innerHTML = `${date.getDate()} - ${
  date.getMonth() + 1
} - ${date.getFullYear()}`;

secondsElement.innerHTML = date.getSeconds();
minutesElement.innerHTML = date.getMinutes() + " :";
hoursElement.innerHTML = date.getHours() + " :";

if (new Date().getSeconds() < 10) {
  secondsElement.innerHTML = "0" + new Date().getSeconds();
}

setInterval(() => {
  if (new Date().getSeconds() === 0) {
    const currentMinutes =
      new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes();

    minutesElement.innerHTML = currentMinutes + " :";
  }

  if (new Date().getMinutes() === 0) {
    const currentHours =
      new Date().getHours() < 10
        ? "0" + new Date().getHours()
        : new Date().getHours();

    hoursElement.innerHTML = currentHours + " :";
  }

  secondsElement.innerHTML =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();
}, 1000); // 1 second
