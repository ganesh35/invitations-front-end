

# Setting up initial App

## Update npm
```sh
npm install npm@latest -g

```
## Install/update  Angular CLI
```sh
npm install @angular/cli -g 
```

## Create a workspace and initial application
```sh
ng new front-end
cd front-end
```

## Creating a Core Module 
```sh
ng generate library core
```

## Incremental build, serve and test
```sh
ng build core --watch
ng serve
ng test
```


### Usage

#### Import to app.module
```javascript
// front-end/src/app/app.module.ts
import { CoreModule } from 'core';

@NgModule({
  imports: [
    CoreModule
   ]
})
export class AppModule { }   
```

## Environment Files
```sh
mkdir front-end/projects/core/src/environments/environment.prod.ts
mkdir front-end/projects/core/src/environments/environment.ts
```







## Font-Awesome
- Installation
```sh
npm install --save font-awesome
```

- Usage
- File:  .anguular.json -
```javascript
"styles": [
    "./node_modules/font-awesome/css/font-awesome.css",
    
]
```


```sh
ng g component views/invitations --module app 
```

# Bootstrap Angular components
Ref: https://valor-software.com/ngx-bootstrap/#/pagination
```sh
npm install ngx-bootstrap --save
```


