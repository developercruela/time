const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function clock() {
  const now = new Date();
  const getsecond = now.getSeconds();
  const getminute = now.getMinutes();
  const gethour = now.getHours();

  const sdegree = (getsecond / 60) * 360;
  second.style.transform = `rotate(${sdegree}deg)`;

  const mdegree = (getminute / 60) * 360;
  minute.style.transform = `rotate(${mdegree}deg)`;

  const hdegree = (gethour / 12) * 360;
  hour.style.transform = `rotate(${hdegree}deg)`;
}

setInterval(clock, 1000);
