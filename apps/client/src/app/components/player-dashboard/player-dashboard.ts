import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LiquidGlassContainer } from 'vecholib/angular/components';
import { PlayerClass } from '../../../../../../libs/shared/models/src/lib/player-class';
@Component({
  selector: 'aberration-player-dashboard',
  imports: [JsonPipe, LiquidGlassContainer],
  templateUrl: './player-dashboard.html',
  styleUrl: './player-dashboard.css',
})
export class PlayerDashboard {
  @Input({ required: true }) playerName = 'Player';
  @Input({ required: true }) playerClass!: PlayerClass;

  hasMesage = false;
  hasSlime = false;

  get backgroundImage(): string {
    return `url('${this.playerClass.glyph}')`;
  }

  onMessageClick() {
    this.hasMesage = !this.hasMesage;
  }

  onSlimeClick() {
    this.hasSlime = !this.hasSlime;
  }
}
