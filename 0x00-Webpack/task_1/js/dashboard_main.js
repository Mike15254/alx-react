import $ from 'jquery';
import { debounce } from 'lodash';

$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click the here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('button').click(debounceUpdateCounter);
  $('body').append('<p>Copyright - Holberton School</p>');
});

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

const debounceUpdateCounter = debounce(updateCounter, 500);
