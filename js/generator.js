$('#generate-btn').click(() => {
  const recipient = $('#recipientInput').val();
  const subject = $('#titleInput').val();
  const message = $('#messageContent').val();

  if (!recipient || !subject || !message) return;

  let fullURL = `https://reddit.com/message/compose?to=${recipient}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`;

  $('#results-field').text(fullURL);
})

$('#clear-btn').click(() => {
  $('#recipientInput').val('');
  $('#titleInput').val('');
  $('#messageContent').val('');
})