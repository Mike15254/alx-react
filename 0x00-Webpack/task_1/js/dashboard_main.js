import $ from 'jquery';
import _ from 'lodash';

$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('button').click(updateCounter);
  $('body').append('<p>Copyright - Holberton School');
});

let count = 0;

const updateCounter = _.debounce(() => {
  count++;
  document.getElementById('count').innerHTML = `${count} clicks on the button`;
});
