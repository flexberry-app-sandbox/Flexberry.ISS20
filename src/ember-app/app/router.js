import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s20-вид-поддержки-l');
  this.route('i-i-s-i-s-s20-вид-поддержки-e',
  { path: 'i-i-s-i-s-s20-вид-поддержки-e/:id' });
  this.route('i-i-s-i-s-s20-вид-поддержки-e.new',
  { path: 'i-i-s-i-s-s20-вид-поддержки-e/new' });
  this.route('i-i-s-i-s-s20-условие-l');
  this.route('i-i-s-i-s-s20-условие-e',
  { path: 'i-i-s-i-s-s20-условие-e/:id' });
  this.route('i-i-s-i-s-s20-условие-e.new',
  { path: 'i-i-s-i-s-s20-условие-e/new' });
  this.route('i-i-s-i-s-s20-форма-l');
  this.route('i-i-s-i-s-s20-форма-e',
  { path: 'i-i-s-i-s-s20-форма-e/:id' });
  this.route('i-i-s-i-s-s20-форма-e.new',
  { path: 'i-i-s-i-s-s20-форма-e/new' });
});

export default Router;
