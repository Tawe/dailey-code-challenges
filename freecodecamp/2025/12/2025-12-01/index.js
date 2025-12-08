function convertToKm(miles) {
  const km = miles * 1.60934;
  return Number(km.toFixed(2));
}


const x = convertToKm(0.00000071)
x;