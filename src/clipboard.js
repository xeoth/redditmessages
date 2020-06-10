const clipboard = new ClipboardJS('.copy-button');

clipboard.on('success', function (e) {
  console.log(e);
});

clipboard.on('error', function (e) {
  console.error(e);
});

function changeButtonText() {
  $('.button-text').html('Copied!');
  setTimeout(function () {
    $('.button-text').html('Copy');
  }, 1000);
}