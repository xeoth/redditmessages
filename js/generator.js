function generate() {
  const recipient = $('#recipient-text-box');
  const subject = $('#subject-text-box');
  const message = $('#message-textarea');

  if (!recipient.val() || !subject.val() || !message.val()) {
    $('.incomplete-fields-warning').css('display', 'block');
    [recipient, subject, message].forEach(el => el.val() ? {} : el.css('border', '2px solid red'));
    return;
  } else {
    [recipient, subject, message].forEach(el => el.val() ? el.css('border', 'none') : {});
    $('.incomplete-fields-warning').css('display', 'none');
  }

  let fullURL = `https://reddit.com/message/compose?to=${recipient.val()}&subject=${encodeURIComponent(subject.val())}&message=${encodeURIComponent(message.val())}`;

  $('#result').val(fullURL);
}