# Angular Elements Example
This project was created to test out [Angular Elements](https://angular.io/guide/elements).

It was to show that you can have a legacy website and upgrade it incremetally instead of having to do a rewrite from scratch.

The project demonstrates that you can have an existing website running on Bootstrap 3 and jQuery and the new parts running Bootstrap 4 and ng-Bootstrap in isolation. This is done by using [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) (also called Web Components) to isolate the new functionality from any existing CSS / Javascript.

Here is a [link](https://angular-elements-example.azurewebsites.net/) to the running project.


# Installed Packages
The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

1. Create Project
  ng new angular-elements-example

2. Angular Elements
  ng add @angular/elements

3. Scripting Libraries 
	[concat](https://www.npmjs.com/package/concat) and [fs-extra](https://www.npmjs.com/package/fs-extra)
	npm install concat --save-dev
	npm install fs-extra --save-dev

4. Install Polyfills
	n.b. Shady DOM didnt work from a pollyfill for some reason although it was suggested it would [here](https://stackoverflow.com/questions/56953831/viewencapsulation-shadowdom-support-in-edge-ie-and-older-browsers).
	
	4a. Add to pillyfills.ts:
		import '@webcomponents/custom-elements/src/native-shim';
		import '@webcomponents/custom-elements/custom-elements.min';
		npm i @webcomponents/custom-elements --save

	4b. Remove the script from angular.json
		"input": "node_modules/document-register-element/build/document-register-element.js"

5. (Bootstrap 4)[https://getbootstrap.com/] & [ng-nootstrap](https://ng-bootstrap.github.io/#/getting-started)
	npm install bootstrap@4 --save
	npm install --save @ng-bootstrap/ng-bootstrap

## Http Server
  The npm package [http-server](https://www.npmjs.com/package/http-server) is a lightweight ummmm... http server.
	npm install http-server -g

## Building Angular Elements
1. ng build --prod --output-hashing none
2. node build-elements
3. http-server dist/angular-elements-example
4. http://localhost:8080/index-elements.html



## Commands

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
