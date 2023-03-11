function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

const discripitons = ['nice', 'bad', 'good'];

function getPhotos (num) {
  const photos = new Array(num);
  for (let i = 1; i <= photos.length; i++) {
    photos[i - 1] = {
      id: i,
      url: `photos/${i}.jpg`,
      discripiton: discripitons[getRandomPositiveInteger(0, 2)],
      likes: getRandomPositiveInteger(15, 200),
      comments: getRandomPositiveInteger(0, 200)
    };
  }
  return photos;
}

const ph = getPhotos(25);
// eslint-disable-next-line
console.log(ph[5])

// eslint-disable-next-line
checkStringLength('12', 3)

