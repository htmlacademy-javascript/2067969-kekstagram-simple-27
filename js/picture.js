// import {createCards} from './data.js'; // ЭТО УДАЛИТЬ?

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
// const pictureItems = createCards(); // ЭТО УДАЛИТЬ?

const renderPictureList = (pictureItems) => {
  const pictureContainerFragment = document.createDocumentFragment();

  pictureItems.forEach(({url, comments, likes}) => {
    const pictureItem = newPictureTemplate.cloneNode(true);
    pictureItem.querySelector('.picture__img').src = url;
    pictureItem.querySelector('.picture__likes').textContent = comments;
    pictureItem.querySelector('.picture__comments').textContent = likes;
    pictureContainerFragment.appendChild(pictureItem);
  });

  pictureContainer.appendChild(pictureContainerFragment);
};

export {renderPictureList};
