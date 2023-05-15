const div = document.querySelector('#joke');
const btn = document.querySelector('#joke-btn');

function generateJoke() {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          div.innerHTML = JSON.parse(this.responseText).value;
        } else {
          div.innerHTML = 'Something went wrong (Not Funny)';
        }
      }
    };
  
    xhr.send();
  }

btn.addEventListener('click', generateJoke);