import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation/src/utils/dynamic-federation';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'product',
    // loadChildren: () => import('product/Module').then(m => m.ProductModule)
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4004/productEntry.js',
        remoteName: 'product',
        exposedModule: './Module',
      }).then((m) => m.ProductModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:5005/customerEntry.js',
        remoteName: 'customer',
        exposedModule: './Module',
      }).then((m) => m.CustomerModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:6006/orderEntry.js',
        remoteName: 'order',
        exposedModule: './Module',
      }).then((m) => m.OrderModule),
  },
  {
    path: 'tracking',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:7007/trackingEntry.js',
        remoteName: 'tracking',
        exposedModule: './Module',
      }).then((m) => m.TrackingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
