import $ from 'jquery';
import _ from 'lodash';

let count = 0;

$(document).ready(() => {
  $('body').append('<p> Holberton Dashboard</p>');
  $('body').append('<p> Dashboard data for the students</p>');
  $('body').append('<button id="myButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
  $('#count').text(`${count} clicks on the button`);
});

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 1000);

$('#myButton').on('click', debouncedUpdateCounter);
