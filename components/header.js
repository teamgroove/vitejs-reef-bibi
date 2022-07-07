import Reef from 'reefjs';
let header = new Reef('#header', {
  data: {},
  template: function (props) {
    return `
	<div>	header</div>`;
  },
});

export default header;
