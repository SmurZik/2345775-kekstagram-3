import {getPhotos} from './data.js';
import {checkStringLength} from './util.js';
import './picture.js';

const ph = getPhotos(25);
// eslint-disable-next-line
console.log(ph[5])

// eslint-disable-next-line
checkStringLength('12', 3)
