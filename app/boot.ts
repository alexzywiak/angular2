import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import { AppViewListener } from 'angular2/src/core/linker/view_listener';
import { DebugElementViewListener } from 'angular2/platform/common_dom';
import { bind } from 'angular2/core';

bootstrap(AppComponent, [
	bind(AppViewListener).toClass(DebugElementViewListener)
]);