import $ from 'jquery';

$(document).ready(() => {
  $('header').prepend('<div id="logo" width="200px" height="200px"></div>');
  $('header').prepend('<h1>Holberton Dashboard</h1>');
  console.log('Init header');
});
