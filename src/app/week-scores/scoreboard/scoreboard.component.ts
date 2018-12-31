import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Game } from '../../game';

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit, OnChanges {
  @Input() games: Game[];

  ngOnInit() {
    this.games = this.sortGames(this.games);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.games = this.sortGames(changes['games']['currentValue']);
  }

  sortGames(games: Game[]): Game[] {
    return games.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
  }

}
