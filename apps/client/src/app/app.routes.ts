import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'play/:id',
    loadComponent: () =>
      import('./pages/game-view/game-view').then((c) => c.GameView),
  },
];
