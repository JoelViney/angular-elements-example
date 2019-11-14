import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// External Components
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
	],
	entryComponents: [
	],
	declarations: [
		// Components

	],
	exports: [
		CommonModule,
		FormsModule,

		// External Components
		NgbModule,

		// Components

		// Pipes

		// Directives
	],
	providers: [
	]
})
export class SharedModule { 

}
