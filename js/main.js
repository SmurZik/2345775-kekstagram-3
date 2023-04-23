// import {getPhotos} from './data.js';
import {checkStringLength} from './util.js';
import {getPicturesFromServer} from './api.js';
import './picture.js';
import './form.js';
import './validation.js';
import './scale.js';
import './effect.js';

getPicturesFromServer();

// eslint-disable-next-line
checkStringLength('12', 3)
