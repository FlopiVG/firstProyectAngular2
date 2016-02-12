import {bootstrap} from 'angular2/platform/browser';
import {PonyRacerApp} from './ponyracer_app';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RaceService} from './services/race_service';
import {provide} from 'angular2/core';

bootstrap(PonyRacerApp, [
    HTTP_PROVIDERS, 
    provide(RaceService, {useClass: RaceService})])
    .catch(err => console.log(err)); //useful to catch the errors