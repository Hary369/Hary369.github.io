var http = require("http");

//create a server object:
server = http.createServer()
server.on("request", function (req, res) {
  envoyerMail("pti.baub@gmail.com");
  res.write("Hello from CodeSandbox!"); //write a response to the client
  res.end(); //end the response
})
server.listen(8080); //the server object listens on port 8080

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use false for STARTTLS; true for SSL on port 465
  auth: {
    user: "noel.secret.santaclaus@gmail.com",
    pass: "fbeu qdmg rxhk atlm ",
  },
});

function envoyerMail(email) {
  const mailOptions = {
    from: "noel.secret.santaclaus@gmail.com",
    to: email,
    subject: "1 seul cadeau de Noël par personne",
    text: "Noël",
    html: "argh",
      };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}
