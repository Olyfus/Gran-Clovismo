# GranClovismo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



# CASE DE JEU
Tableau par case
chaque case aura son id mais aura un tableau des cases qu'elle peux avoir 
pour pouvoir bouger ou savoir si carambolage
Bouger devant = var[].max() = x, x + 3 = nouvelle case 
Carambolage derrière = var[].min() = x, x - 3 ? car : carambolage
Carambolage devant = var[].min() = x, x + 3 ? car : carambolage
Carambolage côté = for each var in var[], if : var pos % 3 = 0 : droite, 1 : gauche, 2 : millieu
if varpos = 0 {
 x - row - 1 / x - 1

}
else if varpos = 1 {
 x - row + 1 / x + 1
}
else if varpos = 2 {
 x - 1 / x + 1 / x + row - 1 / x + row + 1
}