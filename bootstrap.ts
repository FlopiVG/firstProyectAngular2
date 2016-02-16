import {bootstrap} from 'angular2/platform/browser';
import {PonyRacerApp} from './ponyracer_app';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RaceService, FakeRaceService} from './services/race_service';
import {provide} from 'angular2/core';

// we just have to change this constant when going to prod
const IS_PROD = false;

bootstrap(PonyRacerApp, [HTTP_PROVIDERS,
    provide(RaceService, {useClass: IS_PROD ? RaceService : FakeRaceService})])

    .catch(err => console.log(err)); //useful to catch the errors
    