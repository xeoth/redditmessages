const clipboard = new ClipboardJS('.copy-button');

clipboard.on('success', function (e) {
  $('.button-text').html('Copied!');
  setTimeout(function () {
    $('.button-text').html('Copy');
  }, 1000);
});

clipboard.on('error', function (e) {
  console.error(e);
});