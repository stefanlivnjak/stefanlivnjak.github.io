console.log("It works")

$(document).ready(function() {
	$('.submit').click(function (event) {
		console.log('clicked')

		var email = $('.email').val()
		var subject = $('.subject').val()
		var message = $('.message').val()
		var statusElm = $('.status')
		statusElm.empty()

		if(email.length > 5 && email.includes('@') && email.includes('.')) {
			statusElm.append('<div>Email is valid</div>')
		} else {
			event.preventDefault()
			statusElm.append('<div>Email not valid</div>')
		}

		if(subject.length >= 2) {
			statusElm.append('<div>Subject is valid</div>')
		} else {
			event.preventDefault()
			statusElm.append('<div>Subject not valid</div>')
		}


		if(message.length >= 5) {
			statusElm.append('<div>Message is valid</div>')
		} else {
			event.preventDefault()
			statusElm.append('<div>Message not valid</div>')
		}

	})
})