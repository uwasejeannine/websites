$(document).redy(function() {
    $('.submit').click(function(event) {
        event.preventDeault()
        console.log("clicked button")
        var email = $(".email").val()
        var subject = $(".subject").val()
        var message = $(".message").val()
        var student = $(".student")
        statusELM.empty()
        if (mail.length > 5 && email.includes("@") && email.includes(".")) {
            statusELM.append("<div>Email is valid</div>")
        } else {
            statusELM.append("<div>Email is valid</div>")
        }
        if (subject.length > 2) {
            statusELM.append("<div>subject is valid</div>")
        } else {
            statusELM.append("<div subject is not valid</div>")
        }
        if (message.length > 20) {
            statusELM.append("<div>message is valid</div>")
        } else {
            statusELM.append("<div subject is not valid</div>")
        }
    })
})