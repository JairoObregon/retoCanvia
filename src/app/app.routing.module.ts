import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: 'home/1', pathMatch: 'full', redirectTo: 'home/1' },
  {
    path: 'info',
    loadChildren: () =>
      import('./core/info/info.module').then(
        (m) => m.InfoModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./core/detail/detail.module').then(
        (m) => m.DetailModule
      ),
  },
  {
    path: 'mylist',
    loadChildren: () =>
      import('./core/mylist/mylist.module').then(
        (m) => m.MylistModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    relativeLinkResolution: 'legacy', 
    scrollPositionRestoration: 'top',
    preloadingStrategy: PreloadAllModules, })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
