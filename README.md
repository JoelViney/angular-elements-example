# AngularElementsExample
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

# Installed packages

1. Create Project:
	> ng new angular-elements-example

2. Angular Elements
	> ng add @angular/elements

3. https://www.npmjs.com/package/concat
	> npm install concat --save-dev

	> npm install fs-extra --save-dev

4. https://www.npmjs.com/package/http-server
	> npm install http-server -g

5. Install Angular Elements
	npm i @webcomponents/custom-elements --save

5. Add Polyfills:
	Shady DOM didnt work from a pollyfill for some reason. webcomponents/shadydom
	5a. Included script from here:
	https://stackoverflow.com/questions/56953831/viewencapsulation-shadowdom-support-in-edge-ie-and-older-browsers
	5b. Remove angular.json script > "input": "node_modules/document-register-element/build/document-register-element.js"
	5c. Add to pillyfills.ts:
		import '@webcomponents/custom-elements/src/native-shim';
		import '@webcomponents/custom-elements/custom-elements.min';


## Building Angular Elements
1. ng build --prod --output-hashing none
2. node build-elements
3. http-server dist/angular-elements-example

http://localhost:8080/index-elements.html
 
## Commands

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
