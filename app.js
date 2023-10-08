const $ = function(args){ return document.querySelector(args);}
const $$ = function(args){ return document.querySelectorAll(args);}

HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }

import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Order.js';
import Router from './services/Router.js';

import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    app.router.init();
    await loadData();
});

function renderTest() {
    const categories = app.store.menu.map((item) => item.name);
    console.log('categories', categories);
}

window.renderTest = renderTest;
