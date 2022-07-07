import './style.css';

import Reef from 'reefjs';
import Navigo from 'navigo';
import todos from './components/todos.js';
import header from './components/header.js';
import home from './components/home.js';
import articles from './components/articles.js';
let page = '';
const router = new Navigo('/', { hash: true });
//const render = (content) =>
//  (document.querySelector('#content').innerHTML = content);

router
  .on('/todos', (match) => {
    console.log(match);
    page = todos;
    //  render('About');
  })
  .on('/products', (match) => {
    console.log(match);
    //  render('Products ' + JSON.stringify(match.params));
  })
  .on('/login', (match) => {
    console.log(match);
    //    render('Login');
  })
  .on((match) => {
    console.log(match);
    page = home;
    //  render('home');
  })
  .resolve();

// Create an app
let app = new Reef('#app', {
  data: {
    articles: [],
  },
  template: function (props) {
    // If there are no articles
    if (!props.articles.length) {
      //  return `<p>There are no articles.</p>`;
    }

    // Otherwise, show the articles
    return `

 
    ${header.html()}
   
    ${page.html()}

    ${articles.html()}

	`;
  },
});
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    app.data.articles = data;
  });
app.render();
