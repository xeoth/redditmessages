const clipboard = new ClipboardJS('#copy-btn');

clipboard.on('success', e => {
  const $copyButton = $('#copy-btn');

  $copyButton.removeClass('btn-outline-primary').addClass('btn-outline-success');
  $copyButton.html('Copied!');

  setTimeout(() => {
    $copyButton.removeClass('btn-outline-success').addClass('btn-outline-primary');
    $copyButton.html('<img src="./icons/clipboard.svg" alt="clipboard icon"> Copy');
  }, 1000);
})