import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },
  {
    path: 'movie/:movieId',
    loadChildren: () => import('./pages/movies-detail/movies-detail.module').then( m => m.MoviesDetailPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies-list/movies-list.module').then( m => m.MoviesListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
