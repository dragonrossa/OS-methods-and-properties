const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const fs = require('fs');
var cors = require('cors')
var os = require('./os')
const port = 3000;


app.use(bodyParser.json())
app.use(cors())


app.get('/', function (req, res) {

  let json_test = {
    "hostname": os.osObject,
    "totalMemory": os.totalMemory,
    "freeMemory": os.freeMemory,
    "platform": os.platform,
    "homeDirectory": os.homeDir,
    "cores": os.cores,
    "dateRelease": os.reLease,
    "tempDir": os.tempDir,
    "type": os.type,
    "uptime": os.upTime,
    "uid": os.uid,
    "gid": os.gid,
    "users": os.userN,
    "homeDirectory": os.homediR,
    "shell": os.shell,
    "numberOfProcessors": os.numberOfProcesors,
    "result": os.result,
    "user": os.User,
    "sumaCPU": os.sumaCpu,
    "sighup": os.sighup,
    "sigint": os.sigint,
    "sigill": os.sigill,
    "sigabrt": os.sigabrt,
    "sigfpe": os.sigfpe,
    "sigkill": os.sigkill,
    "sigsegv": os.sigsegv,
    "sigterm": os.sigterm,
    "sigrebak": os.sigbreak,
    "sigwinch": os.sigwinch,
    "adapter1": os.adapter1,
    "adapter2": os.adapter2

  }


  let data = JSON.stringify(json_test, null, 2);

  fs.writeFile('os.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

  console.log('This is after the write call');
  res.sendFile(__dirname + '/index.html');
  
});


app.post('/test', function (req, res) {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream('os.pdf'));

  doc
    .font('fonts/PALAT32.ttf')
    .fontSize(25)
    .text('List of operating system-related utility methods and properties', 100, 50)
    .font('fonts/PALAT32.ttf')
    .fontSize(15)
    .text('Name of host: ' + os.osObject, 100, 100)
    .text('Total memory: ' + os.totalMemory, 100, 120)
    .text('Free memory: ' + os.freeMemory, 100, 140)
    .text('Name of platform: ' + os.platform, 100, 160)
    .text('Name of home directory: ' + os.homeDir, 100, 180)
    .text('Number of CPU cores: ' + os.cores, 100, 200)
    .text('Release: ' + os.reLease, 100, 220)
    .text('Temporary directory: ' + os.tempDir, 100, 240)
    .text('Type of operating system: ' + os.type, 100, 260)
    .text('Uptime: ' + os.upTime, 100, 280)
    .text('This users UID:: ' + os.uid, 100, 300)
    .text('This users GID: ' + os.gid, 100, 320)
    .text('This users username: ' + os.userN, 100, 340)
    .text('Home directory: ' + os.homeDir, 100, 360)
    .text('Shell: ' + os.shell, 100, 380)
    .text('We have: ' + os.numberOfProcesors + ' processors in this computer', 100, 400)
    .text('This is sum of speed of all the CPU: ' + os.result, 100, 420)
    .text('List of all users: ', 100, 440)
    .text(os.User, 100, 460)
    .text('Adapter1: ' + os.adapter1, 100, 480)
    .text('Adapter2: ' + os.adapter2, 100, 500)


  // Add an image, constrain it to a given size, and center it vertically and horizontally
  doc.image('image/macbook.png', {
    fit: [250, 200],
    align: 'center',
    valign: 'center'
  });

  doc.end();
  res.send("rosa")
})



app.get('/opis-racunala', function (req, res) {

  res.write("<h1>List of operating system-related utility methods and properties</h1>")
  res.write("<p><b>Name of host:</b> " + os.osObject + "\n</p>");
  res.write("<p><b>Total memory:</b>" + os.totalMemory + "</p>")
  res.write("<p><b>Free memory:</b>" + os.freeMemory + "</p>")
  res.write("<p><b>Name of platform:</b>" + os.platform + "</p>")
  res.write("<p><b>Name of home directory:</b>" + os.homeDir + "</p>")
  res.write("<p><b>Number of CPU cores:</b>" + os.cores + "</p>")
  res.write("<p><b>Release:</b>" + os.reLease + "</p>")
  res.write("<p><b>Temporary directory:</b>" + os.tempDir + "</p>")
  res.write("<p><b>Type of operating system:</b>" + os.type + "</p>")
  res.write("<p><b>Uptime:</b>" + os.upTime + "</p>")
  res.write("<p><b>This users UID:</b>" + os.uid + "</p>")
  res.write("<p><b>This users GID:</b>" + os.gid + "</p>")
  res.write("<p><b>This users username:</b>" + os.userN + "</p>")
  res.write("<p><b>Home directory:</b>" + os.homediR + "</p>")
  res.write("<p><b>Shell:</b> " + os.shell + "</p>")
  res.write("<p>We have <b>" + os.numberOfProcesors + "</b> processors in this computer.</p>")
  res.write("<p>This is sum of speed of all the CPU: " + os.result + "</p>")
  res.write("<p>List of all users: " + os.User + "</p>")
  res.write("<p>" + os.sumaCpu + "</p>")
  res.write("<h4>List of all adapters</h4>")
  res.write("<p>" + os.adapter1 + "</p>")
  res.write("<p>" + os.adapter2 + "</p>")


  res.write("</br><h3>List of signals on this computer</h3><br>")
  res.write("<p><b>Sighup:</b> " + os.sighup + "</p>")
  res.write("<p><b>Sigint:</b> " + os.sigint + "</p>")
  res.write("<p><b>Sigill:</b> " + os.sigill + "</p>")
  res.write("<p><b>Sigabrt:</b> " + os.sigabrt + "</p>")
  res.write("<p><b>Sigfpe:</b> " + os.sigfpe + "</p>")
  res.write("<p><b>Sigkill:</b> " + os.sigkill + "</p>")
  res.write("<p><b>Sigsegv:</b>" + os.sigsegv + "</p>")
  res.write("<p><b>Sigtermn:</b> " + os.sigterm + "</p>")
  res.write("<p><b>Sigbreak:</b> " + os.sigbreak + "</p>")
  res.write("<p><b>Sigwinch:</b> " + os.sigwinch + "</p>")
  res.write("<br><h3>List of errors</h3><br>")
  res.write("<p>E2Big: " + os.e2big + "</p>")

  res.end();

})


//app.get(/\/information(?:\.html)?$/, (req, res) => res.send('Hello World!'))

app.get('/skini-pdf/os.pdf', function (req, res) {
  var options = { encoding: 'binary' };
  var file = fs.createReadStream('./os.pdf', options);
  var stat = fs.statSync('./os.pdf');
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=os.pdf');
  file.pipe(res);

})


app.get('/unos-racunala', function (req, res) {
  res.sendFile(__dirname + '/unos-racunala.html');
})



app.post('/unos-racunala', function (req, res) {
  console.log("Ja sam Rosa")
 // console.log(fname + "" + lname)
  console.log(req.body.fname)
  var fname = req.body.fname;
  var lname = req.body.lname;

  var imePrezime = fname + ", " +lname;
  fs.writeFile('unos.txt', imePrezime, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  let unos = {
    fname,
    lname
  }

  let data = JSON.stringify(unos, null, 2);

  fs.writeFile('unos.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });

  console.log('This is after the write call');
  res.send(fname + ' ' + lname);
  return(console.log(fname + " " + lname))
});



app.get('/ispis-racunala', function (req, res) {
  res.sendFile(__dirname + '/ispis-racunala.html');

})


// POST /login gets urlencoded bodies

//Postman - test with POST localhost:3000/upisano
app.post('/upisano', function (req, res) {
  // bodyParser.urlencoded,
  //res.send('welcome, ' + req.body.username)
  res.send("teeeeeest")
})

//Postman - test with GET localhost:3000/questions
app.get("/questions", function (req, res) {
  res.send("You sent me a GET reeuest");
});





app.listen(port, () => console.log(`Example app listening on port ${port}!`))