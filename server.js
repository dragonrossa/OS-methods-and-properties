var http = require('http');
var os = require('./os')
//var bootstrap = require('bootstrap');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>List of operating system-related utility methods and properties</h1>")
    res.write("<p><b>Name of host:</b> " + os.osObject + "\n</p>");
    res.write("<p><b>Total memory:</b>" + os.totalMemory + "</p>")
    res.write("<p></b>Free memory:</b>" + os.freeMemory + "</p>")
    res.write("<p></b>Name of platform:</b>" + os.platform + "</p>")
    res.write("<p><b>Name of home directory:</b>" + os.homeDir + "</p>")
    res.write("<p><b>Number of CPU cores:</b>" + os.cores + "</p>")
    res.write("<p><b>Release:</b>" + os.reLease + "</p>")
    res.write("<p><b>Temporary directory:</b>" + os.tempDir + "</p>")
    res.write("<p><b>Type of operating system:</b>" + os.type + "</p>")
    res.write("<p><b>Uptime:</b>" + os.upTime + "</p>")
    res.write("<p><b>This users UID:</b>" + os.uid + "</p>")
    res.write("<p><b>This users Gid:</b>" + os.gid + "</p>")
    res.write("<p><b>This users username:</b>" + os.userN + "</p>")
    res.write("<p><b>Home directory:</b>" + os.homediR + "</p>")
    res.write("<p><b>Shell:</b> " + os.shell + "</p>")
    res.write("<p>We have <b>" + os.numberOfProcesors + "</b> processors in this computer.</p>")
    res.write("<p>This is sum of speed of all the CPU: " + os.result + "</p>")
    res.write("<p>List of all users: " + os.User + "</p>")
    res.write("<p>" + os.sumaCpu + "</p>")
    res.write("<h4>List of all adapters</h4>")
    res.write("<p>" + os.adapter1+ "</p>")
    res.write("<p>" + os.adapter2+ "</p>")
    res.write("<p>" + os.adapter3+ "</p>")
    res.write("<p>" + os.adapter4+ "</p>")
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
    res.end("");

}).listen(8080);