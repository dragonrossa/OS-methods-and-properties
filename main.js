
const os = require('os');

var osObject = os.hostname();
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var platform = os.platform();
var homeDir = os.homedir();
var cpU = os.cpus();
var reLease = os.release();
var tempDir = os.tmpdir()
var type = os.type();
var upTime = os.uptime();


document.getElementById('response').innerHTML = osObject;
document.getElementById('response2').innerHTML = totalMemory;
document.getElementById('response3').innerHTML = freeMemory;
document.getElementById('response4').innerHTML = platform;
document.getElementById('response5').innerHTML = homeDir;
document.getElementById('response6').innerHTML = cpU;
document.getElementById('response7').innerHTML = reLease;
document.getElementById('response8').innerHTML = tempDir;
document.getElementById('response9').innerHTML = type;
document.getElementById('response10').innerHTML = upTime;

var odgovor = "Ovo dela!"
document.getElementById('response11').innerHTML = odgovor;




