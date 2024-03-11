class RobotXY {
  serveAmericanCoffee() {
    return "american coffee";
  }

  getBill() {
    return "get bill";
  }
}

class RobotAdvance extends RobotXY {
  serveFrappuchino() {
    return "frappuchino";
  }
}

const robot = new RobotAdvance();
console.log(robot.serveFrappuchino());
console.log(robot.serveAmericanCoffee());
console.log(robot.getBill());
