(function () {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';

  overlay.addEventListener('click', function (evt) {
    overlay.style.display = 'none';
  });

  document.getElementById('hamburger').addEventListener('click', function (evt) {
    overlay.style.display = '';
    evt.preventDefault();
  });
})();