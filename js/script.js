document.querySelector('#click-me').addEventListener('click', (e) => {
  document.querySelectorAll('div').forEach((div) => div.remove());
})