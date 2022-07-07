import Reef from 'reefjs';
let mydata = '';
let articles = new Reef('#articles', {
  data: {
    articles: [],
    //  todos: ['Swim', 'Climb', 'Jump', 'Play'],
  },
  template: function (props) {
    return `
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

export default articles;
