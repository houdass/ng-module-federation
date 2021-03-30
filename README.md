### Shell
```
<nav class="navbar navbar-expand-sm navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img
      src="https://angular.io/assets/images/logos/angular/angular.svg"
      width="30"
      height="30">
  </a>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="/home">Home</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="/product">Product</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="/customer">Customer</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="/order">Order</a>
      </li>
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="/tracking">Tracking</a>
      </li>
    </ul>
  </div>
</nav>
<div class="container mt-2">
  <div class="row">
    <div class="jumbotron">
      Welcome to the Angular Microfrontend demo using Webpack 5 Module federation
      This component is part of the shell application, the remote components
      (customer, order, product, tracking) are remotely loaded into the application,
      check the network settings to see these remotes being loaded.
    </div>

    <div class="jumbotron col-12">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
```

### MicroFrontend
```<div class="card text-white bg-danger m-5">
    <div class="card-header">Product (μFrontend)</div>
    <div class="card-body">
      <h5 class="card-title">Some feature here</h5>
      <p class="card-text">
      
      </p>
    </div>
</div>
```

### Create & setup the Shell
```
ng g app shell
ng add @angular-architects/module-federation --project shell --port 3003
```

### Create & setup product microFrontend
```
ng g app product
ng add @angular-architects/module-federation --project product --port 4004
```

### Create & setup customer microFrontend
```
ng g app customer
ng add @angular-architects/module-federation --project customer --port 5005
```

### Create & setup order microFrontend
```
ng g app order
ng add @angular-architects/module-federation --project order --port 6006
ng g m order --project order 
ng g c order --project order --skip-tests 
```

### Create & setup tracking microFrontend
```
ng g app tracking
ng add @angular-architects/module-federation --project tracking --port 7007
```
