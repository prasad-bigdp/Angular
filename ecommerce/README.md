# EcommerceStore

This is the angular project mimicing an E-commerce store 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

```ng new store --routing --skip-tests --minimal ``` --> to create a minimal angular project 
```ng serve ``` --> starts the dev server

```ng g c header``` --> to Generate the comp

```ng g s cart``` --> to create a service

# Angular Material 

We gon use the angular material lib for managing our comps -- [Angular Material](https://material.angula.io)
```ng add @angular/material``` -- then add the required modules in our app.modules.ts file

## Tailwind Css 

For the styling part we gon use the tailwind css ```yarn add -D tailwindcss postcss autoprefixer ```
```npx tailwindcss init```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Fake store Api

fakeStoreApi is a free online REST API that you can use whenever you need Pseudo-real data for your e-commerce or shopping website without running any server-side code. It's awesome for teaching purposes, sample codes, tests, etc.

```ng g s store``` --> this service has the const STORE_BASE_URL = 'https://fakestoreapi.com/products -- where we can see all the fake products and we can add custom routes and logic

[Fake Store Api](https://fakestoreapi.com/)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. we can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, we need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Payment 

For the payment service (for the onCheckout() ), we will use the stripe service 
```yarn add @stripe/stripe-js``` and add this in our index.html <scripts/>

## Server

In the Server dir we ve our node app (with the express.js) for the stripe service, where we gon create some CORS req