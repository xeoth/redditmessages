$('#generate-btn').click(() => {
  const recipient = $('#recipient-input').val();
  const subject = $('#title-input').val();
  const message = $('#message-content').val();

  if (!recipient || !subject || !message) return;

  let fullURL = `https://reddit.com/message/compose?to=${recipient}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`;

  $('#results-field').text(fullURL);
})

$('#clear-btn').click(() => {
  $('#recipient-input').val('');
  $('#title-input').val('');
  $('#message-content').val('');

  $('#results-field').text('Your link will appear here once you hit "Generate"!');
})