const submitForm = document.querySelector('#form');

const getFace = async (event) => {
  event.preventDefault();

  const gender = document.querySelector('#gender').value;
  const ethnicity = document.querySelector('#ethnicity').value;
  const age = document.querySelector('#age').value;

  console.log(age);
  const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd56837166emsh42678dd090e6385p1523c0jsn1a9d68868d4a',
      'X-RapidAPI-Host': 'face-studio.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.blob();
    const image = URL.createObjectURL(result);
    const imageDOM = document.createElement('img');
    imageDOM.src = image;
    const imageContainer = document.querySelector('#image-container');
    imageContainer.appendChild(imageDOM);
  } catch (error) {
    console.error(error);
  }
};

submitForm.addEventListener('submit', getFace);
