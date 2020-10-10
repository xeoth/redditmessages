function generate() {
  const recipient = $('#recipient-text-box').val();
  const subject = $('#subject-text-box').val();
  const message = $('#message-textarea').val();

  if (!recipient || !subject || !message) return;

  let fullURL = `https://reddit.com/message/compose?to=${recipient.val()}&subject=${encodeURIComponent(subject.val())}&message=${encodeURIComponent(message.val())}`;

  console.log(fullURL)
}

function clear() {
  console.log('lol');
  $('#recipient-text-box').val('');
  $('#subject-text-box').val('');
  $('#message-textarea').val('');

}

$('#generate-btn').click((e) => {
  e.preventDefault()
  console.log('yeet');
})