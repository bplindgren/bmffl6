import { Component, AfterContentInit, Input } from '@angular/core';
import { Game } from '../../game';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements AfterContentInit {
  @Input() games: Game[];

  constructor() { }

  ngAfterContentInit() {
    console.log("scoreboard: ", this)
  }

}
