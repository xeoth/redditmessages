function generate() {
  const recipient = $('#recipient-text-box').val();
  const subject = $('#subject-text-box').val();
  const message = $('#message-textarea').val();

  let fullURL = `https://reddit.com/message/compose?to=${recipient}&subject=${encodeURI(subject)}&message=${encodeURI(message)}`;

  $('#result').val(fullURL);
}