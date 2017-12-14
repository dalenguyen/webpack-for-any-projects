import angular from 'angular';
import template from './index.tpl.html';
import '../style/app.scss';

console.log('API Key from Define Plugin:', API_KEY);
console.log('Development ENV:', APP_ENV);

let component = {
    template // Use ES6 enhanced object literals.
}

let app = angular.module('app', [])
    .component('app', component)
