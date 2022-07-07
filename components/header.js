import Reef from 'reefjs';
let header = new Reef('#header', {
  data: {},
  template: function (props) {
    return `
	<div>	header
  <a href="/home" data-navigo>HOME</a>
  <a href="/todos" data-navigo>TODOS</a>
  </div>`;
  },
});

export default header;
