var validateCoupons = function (code, businessLine, isActive) {
  const allowed = new Set(["electronics", "grocery", "pharmacy", "restaurant"]);
  const order = { electronics: 0, grocery: 1, pharmacy: 2, restaurant: 3 };
  const re = /^[a-zA-Z0-9_]+$/;

  const valid = [];

  for (let i = 0; i < code.length; i++) {
    if (!isActive[i]) continue;
    if (!re.test(code[i])) continue;
    if (!allowed.has(businessLine[i])) continue;

    valid.push([businessLine[i], code[i]]);
  }

  valid.sort((a, b) => {
    const lineDiff = order[a[0]] - order[b[0]];
    if (lineDiff !== 0) return lineDiff;
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });

  return valid.map((pair) => pair[1]);
};



const x = validateCoupons(["SAVE20","","PHARMA5","SAVE@20"], ["restaurant","grocery","pharmacy","restaurant"], [true,true,true,true])
x;