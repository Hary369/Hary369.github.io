var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello from CodeSandbox!"); //write a response to the client
    envoyerMail("pti.baub@gmail.com");
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

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
    html:
      "<p>Oyez Oyez bonnes gens !</br> Cette année, le Père Noël prévoit son arrivée à Andernos dans la nuit du 21 au 22 décembre !!!! </br> Qu'on se le dise, qu'on se le dise !!!! </br> Afin de lui venir en aide, le petit lutin Gaëtan a crée un logiciel de tirage aléatoire de binômes. Le sort te désigne pour offrir un cadeau à </p>" +
      "<p>Chacun pourra arriver et repartir à la date qui lui convient le mieux. </br> D'ici là, je te souhaite une belle fin d'automne et si tu es allergique ou que tu n'aimes pas un aliment, n'hésite pas à me le dire ! </br> Bisous bisous </br> Mireille</p>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}
