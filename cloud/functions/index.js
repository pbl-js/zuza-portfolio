const functions = require("firebase-functions")
const sgMail = require("@sendgrid/mail")
const cors = require("cors")({ origin: true })

exports.sendEmail = functions.https.onRequest((request, response) => {
  sgMail.setApiKey(functions.config().sendgrid.key)

  const msg = {
    to: "zuzanazarukwrites@gmail.com",
    from: "zuzanazarukwrites@gmail.com",
    subject: `PORTFOLIO | Nowa wiadomość od ${request.body.email}`,
    text: request.body.message,
  }

  cors(request, response, () => {
    sgMail.send(msg, (err, res) => {
      if (err) {
        response.sendStatus(500)
      } else {
        response.send(res)
      }
    })
  })
})
