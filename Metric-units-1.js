// Scientists working internationally use metric units almost exclusively. Unless that is, they wish to crash multimillion dollars worth of equipment on Mars.

// Your task is to write a simple function that takes a number of meters, and outputs it using metric prefixes.

// In practice, meters are only measured in "mm" (thousandths of a meter), "cm" (hundredths of a meter), "m" (meters) and "km" (kilometers, or clicks for the US military).

// For this exercise we just want units bigger than a meter, from meters up to yottameters, excluding decameters and hectometers.

// All values passed in will be positive integers. e.g.

// meters(5);
// // returns "5m"

// meters(51500);
// // returns "51.5km"

// meters(5000000);
// // returns "5Mm"

function meters(x) {
  var units = ["m", "km", "Mm", "Gm", "Tm", "Pm", "Em", "Zm", "Ym"];

  for (var i = 0; x >= 1000 && i < units.length - 1; i++) x /= 1000;

  return x + units[i];
}
