import Reef from 'reefjs';
let todos = new Reef('#todos', {
  data: {
    todos: ['Swim', 'Climb', 'Jump', 'Play'],
  },
  template: function (props) {
    return `
			<ul>
				${props.todos
          .map(function (todo) {
            return `<li>${todo}</li>`;
          })
          .join('')}
			</ul>`;
  },
});

export default todos;
