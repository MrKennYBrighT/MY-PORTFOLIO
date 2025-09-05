/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { setGlobalOptions } = require("firebase-functions");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

/**
 * 🔔 Email Notification Function
 * Sends an email when a new contact form submission is added to Firestore
 */

// Replace with your actual Gmail and App Password
const gmailEmail = "your.email@gmail.com";
// Use Gmail App Password, not your regular password
const gmailAppPassword = "your-app-password";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailAppPassword,
  },
});

exports.sendContactEmail = functions.firestore
  .document("contacts/{docId}")
  .onCreate((snap) => {
    const data = snap.data();

    const mailOptions = {
      from: `"Portfolio Contact" <${gmailEmail}>`,
      to: gmailEmail,
      subject: `New message from ${data.name}`,
      text: `
You received a new message from your portfolio:

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject || "No subject"}
Message: ${data.message}
      `,
    };

    return transporter.sendMail(mailOptions)
      .then(() => logger.info("✅ Email sent successfully"))
      .catch((error) => logger.error("❌ Error sending email:", error));
  });
