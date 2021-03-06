import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CastListComponent } from './cast/cast-list/cast-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'actors', component: CastListComponent },
  // To be generated later on
  // { path: 'movies/new',     component: AddMovieComponent,   canActivate: [AuthGuardService] },
  // { path: 'movie/:id',      component: MovieDetailComponent },
  // { path: 'movie/:id/edit', component: MovieEditComponent,  canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

