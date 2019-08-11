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
