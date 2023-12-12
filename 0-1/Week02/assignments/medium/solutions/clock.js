// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats -
// HH:MM::SS (Eg. 13:45:23)
// HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock(timeFormat) {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const format12 = `${hours % 12 || 12}:${minutes}:${seconds} ${
    hours < 12 ? "AM" : "PM"
  }`;
  const format24 = `${hours}:${minutes}:${seconds}`;
  return timeFormat.toLowerCase() == "12"
    ? console.log(format12)
    : console.log(format24);
}

// setInterval(clock, 1000, "12");
setInterval(clock, 1000, "24");
