const PDFDocument = require('pdfkit');
const fs = require('fs');
var os = require('./os')
 
// Create a document
const doc = new PDFDocument();
 
// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('os.pdf'));
 
// Embed a font, set the font size, and render some text
doc
  .font('fonts/PALAT32.ttf')
  .fontSize(25)
  .text('List of operating system-related utility methods and properties', 100, 50)
  .font('fonts/PALAT32.ttf')
  .fontSize(15)
  .text('Name of host: '+ os.osObject, 100, 100)
  .text('Total memory: ' + os.totalMemory, 100, 120)
  .text('Free memory: ' + os.freeMemory,100,140)
  .text('Name of platform: '+ os.platform, 100,160)
  .text('Name of home directory: '+ os.homeDir, 100,180)
  .text('Number of CPU cores: '+ os.cores, 100,200)
  .text('Release: '+ os.reLease, 100,220)
  .text('Temporary directory: '+ os.tempDir, 100,240)
  .text('Type of operating system: '+ os.type, 100,260)
  .text('Uptime: '+ os.upTime, 100,280)
  .text('This users UID:: '+ os.uid, 100,300)
  .text('This users GID: '+ os.gid, 100,320)
  .text('This users username: '+ os.userN, 100,340)
  .text('Home directory: '+ os.homeDir, 100,360)
  .text('Shell: '+ os.shell, 100,380)
  .text('We have: '+ os.numberOfProcesors + ' processors in this computer', 100,400)
  .text('This is sum of speed of all the CPU: '+ os.result, 100,420)
  .text('List of all users: ', 100,440)
  .text(os.User,100,460)
  .text('Adapter1: '+ os.adapter1, 100,480)
  .text('Adapter2: '+ os.adapter2, 100,500)


  
 
// Add an image, constrain it to a given size, and center it vertically and horizontally
doc.image('image/macbook.png', {
  fit: [250, 200],
  align: 'center',
  valign: 'center'
});
 

doc.end();