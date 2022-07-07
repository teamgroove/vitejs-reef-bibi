import './style.css';

import Reef from 'reefjs';
import Navigo from 'navigo';

import header from './components/header.js';

const router = new Navigo('/', { hash: true });
const render = (content) =>
  (document.querySelector('#content').innerHTML = content);

router
  .on('/about', (match) => {
    console.log(match);
    render('About');
  })
  .on('/products', (match) => {
    console.log(match);
    render('Products ' + JSON.stringify(match.params));
  })
  .on('/login', (match) => {
    console.log(match);
    render('Login');
  })
  .on((match) => {
    console.log(match);
    render('home');
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
      return `<p>There are no articles.</p>`;
    }

    // Otherwise, show the articles
    return `
    <div id="todos">
    ${header.html()}
  </div>
		<ul>
			${props.articles
        .map(function (article) {
          return `
        <!-- This is an example component -->


        <li>
					<strong><a href="#">${article.title}.</a></strong>
					${article.body}
				</li>`;
        })
        .join('')}
		</ul>`;
  },
});

// Fetch API data
// Then, update the app data
/*
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    app.data.articles = data;
  });*/
app.render();
