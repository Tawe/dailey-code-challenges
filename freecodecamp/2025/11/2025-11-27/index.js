function calculateAge(birthday) {
  const [by, bm, bd] = birthday.split("-").map(Number);
  const ey = 2025, em = 11, ed = 27;

  let age = ey - by;
  if (em < bm || (em === bm && ed < bd)) {
    age--;
  }
  return age;
}


const x = calculateAge("2000-12-01");