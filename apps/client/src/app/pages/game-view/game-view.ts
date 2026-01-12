import { PlayerClass } from '@aberration/models';
import { Component } from '@angular/core';
import { PlayerDashboard } from '../../components/player-dashboard/player-dashboard';

@Component({
  selector: 'aberration-game-view',
  imports: [PlayerDashboard],
  templateUrl: './game-view.html',
  styleUrl: './game-view.css',
})
export class GameView {
  playerName = 'Player';
  playerClass = PlayerClass.initRandomClass();
}
