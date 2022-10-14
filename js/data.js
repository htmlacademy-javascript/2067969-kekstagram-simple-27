import {getRandomArrayElement} from './util.js';
import {getRandomIntInclusive} from './util.js';


const ID_COUNT = {
  min: 1,
  max: 25
};

const ADRESS_COUNT = {
  min: 1,
  max: 25
};

const LIKES_COUNT = {
  min: 15,
  max: 200
};

const COMMENTS_COUNT = {
  min: 0,
  max: 200
};

const DESCRIPTIONS = [
  'warming up with coffee',
  'seasons change',
  'summer nights are the best night',
  'wood dream house',
  'chill evenings',
  'autumn walk',
  'sweet dreams',
  'most awaited meeting',
  'lush clouds',
  'imagination rules the world',
  'freedom and peace',
  'red flowers',
  'warm scented candle',
  'this is a masterpiece',
  'my plans for this weekend',
  'same but different',
  'look at this pretty interior',
  'start morning with sports',
  'this tiramisu is too pretty to eat',
  'street food you must to try!',
  'each day is a wonder',
  'happy fall',
  'one of the most breathtaking places',
  'do you ever seen a double waterfall ?',
  'nature always offers us the most beautiful colors'
];

const SIMILAR_CARDS_COUNT = 25;

const createCard = () => ({
  id: getRandomIntInclusive(ID_COUNT.min, ID_COUNT.max),
  url: `photos/${getRandomIntInclusive(ADRESS_COUNT.min, ADRESS_COUNT.max)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(LIKES_COUNT.min, LIKES_COUNT.max),
  comments: getRandomIntInclusive(COMMENTS_COUNT.min, COMMENTS_COUNT.max),
});

const createCards = () => Array.from({length: SIMILAR_CARDS_COUNT}, createCard);
createCards();

export {createCards};
