const dateFormatter = (timestamp) => {
  const date = new Date(timestamp);

  const day = date.getDate();
  const ordinalSuffix = getOrdinalSuffix(day);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short", // This will display "UTC" or "GMT"
    timeZone: "UTC", // Set the time zone if needed, adjust as per your requirements
  };

  const dateFormatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = dateFormatter.format(date);
  return `${formattedDate.replace(",", `${ordinalSuffix},`)}`;
};

function getOrdinalSuffix(day) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = day % 100;
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
}

const timestamp = 1626703745000;

console.log(dateFormatter(timestamp)); // Output: "19th July 2021"

export default dateFormatter;
