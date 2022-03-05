import { Color } from "./Color.enum";
import { Frequency } from "./Frequency.enum";

export default class Habit {
  constructor(name, frequency, goal, isPositive, color, state) {
    this.name = name;
    this.frequency = frequency;
    this.goal = goal;
    this.isPositive = isPositive;
    this.color = color;
    this.state = state;
  }
}
