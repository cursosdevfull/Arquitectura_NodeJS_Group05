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

class RobotUltimate extends RobotAdvance {
  serveCapucchino() {
    return "capucchino";
  }
}

const robot = new RobotUltimate();

console.log(robot.serveAmericanCoffee());
