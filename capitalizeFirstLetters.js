// capitalizeFirstLetters.js

const capitalizeFirstLetters = (string) => 
    (string.length === 0) ? "" : string.split(' ').map(s => s[0].toUpperCase() + s.substr(1)).join(' ');

module.exports = capitalizeFirstLetters;
