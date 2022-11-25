function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symbol = "*") {
  return function (parameter = "special") {
    return `You are ${symbol}${parameter}${symbol}!`;
  };
}
