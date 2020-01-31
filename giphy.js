const img = document.querySelector('img');
const bttn = document.querySelector('button');
const form = document.querySelector('form');

const onPress = () => {
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=zy6b59zxSkFlTzAC3WW4UDmKMNMnFLVV&s=cats&weirdness=5',
    { mode: 'cors' }
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.data.images.original.url);
      addImg(response);
    });
};

const fetchSearch = function(searchValue) {
  let result;
};

const addImg = result => {
  img.src = result.data.images.original.url;
};

const onSearch = search => {
  // make request with search value
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=zy6b59zxSkFlTzAC3WW4UDmKMNMnFLVV&s=${search}&weirdness=5`,
    { mode: 'cors' }
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      return response;
    })
    .catch(error => {
      console.log('not found!');
      img.src =
        'https://media2.giphy.com/media/xUA7bbo8QK36rb4R44/giphy.gif?cid=32b4e94ce2b84492fe64c91d37d0793e1f56c1a21d3b3477&rid=giphy.gif';
    });
  // update the image
};

bttn.addEventListener('click', onPress);
onPress();
// adjust form - on submit
form.addEventListener('submit', onSearch);

export { onSearch as default };
