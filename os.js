const os = require('os');

//List of operating system-related utility methods and properties

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
var options = {
    encoding: 'buffer'
}
var userInfo = os.userInfo(options);
var netWork = os.networkInterfaces();
var signals = os.constants.signals;
var errors = os.constants.errno;
var priority = os.constants.priority;

console.log(`Name of host: ${osObject}`)
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
console.log(`Name of platform: ${platform}`)
console.log(`Name of home directory: ${homeDir}`)
var cores = cpU.length;
console.log(`Number of CPU cores: ${cpU.length}`)
console.log(`Release: ${reLease}`);
console.log(`Temporary directory: ${tempDir}`)
console.log(`Type of operating system: ${type}`)
console.log(`Uptime: ${upTime}`);
console.log(`This users UID: ${userInfo.uid}`)
var uid = userInfo.uid;
console.log(`This users Gid: ${userInfo.gid}`)
var gid = userInfo.gid;
console.log(`This users username: ${userInfo.username}`)
var userN = userInfo.username;
console.log(`Home directory: ${userInfo.homedir}`)
var homediR = userInfo.homedir;
var shell = userInfo.shell;
if(userInfo.shell==null){
console.log(`Shell: ${userInfo.shell}, Windows`);
}
else{
    console.log("Not null means its not Windows");
}


cpU.forEach(element => {
   // console.log(`Name of procesor: ${element.model}`)

});

cpU.forEach(element => {
   // console.log(`Speed of procesor: ${element.speed}`)

});


// speed of CPU
var result = 0;
var numberOfProcesors=0;
for (var i = 0; i < cpU.length; i++) {
    result += cpU[i].speed;
    numberOfProcesors=cpU.length;
}
console.log("We have " + numberOfProcesors + " processors in this computer.");
console.log("This is sum of speed of all the CPU:" + result);


//list of all CPU

cpU.forEach(element => {

    const entries = Object.entries(element);
    entries[2].forEach(element2 => {
        if (element2.user != undefined) {
         //   console.log(`User: ${element2.user}`)
        }
    });

});


//console.log(cpU[0].times.user + " " + cpU[1].times.user)

//function users() {
    var User= "";
    for (var i = 0; i < cpU.length; i++) {
        User += cpU[i].times.user + ", ";
    }
    console.log("List of all the users: " + User)
//}

//users();

//how much processors we have in this computer

for (var i = 0; i <= cpU.length; i++) {
    var suma = 0;
    suma += i;
}

console.log("This computer has: " + suma + "x " + cpU[0].model);

var sumaCpu = "This computer has: " + suma + "x " + cpU[0].model;

const entries1 = Object.entries(netWork);

//list of all adapters with their ip addres and type of address

if (entries1 != 'undefiend') {
    for (var i = 0; i < entries1.length; i++) {
        console.log("Adapter " + [i] + ": " + entries1[i][0] + ", " + entries1[i][1][1].address + ", " + entries1[i][1][1].family)
        var adapterS = "Adapter " + [i] + ": " + entries1[i][0] + ", " + entries1[i][1][1].address + ", " + entries1[i][1][1].family;
    }
}
else {
    console.log("There are no devices!")
}


var adapter1= entries1[0][0]
var adapter2= entries1[1][0]
var adapter3= entries1[2][0]
var adapter4= entries1[3][0]

if(adapter1!="undefined"){
    console.log(adapter1)
}
else{
    console.log("There is no device like this")
}

if(adapter2!="undefined"){
    console.log(adapter2)
}
else{
    console.log("There is no device like this")
}

if(adapter3!="undefined"){
    console.log(adapter3)
}
else{
    console.log("There is no device like this")
}

if(adapter4!="undefined"){
    console.log(adapter4)
}
else{
    console.log("There is no device like this")
}

// console.log(entries1[1][0])
// console.log(entries1[2][0])
// console.log(entries1[3][0])


//list of signals on your computer
//console.log(signals)
console.log(`Sighup: ${signals.SIGHUP}`)
var sighup = signals.SIGHUP;
console.log(`Sigint: ${signals.SIGINT}`)
var sigint = signals.SIGINT;
console.log(`Sigill: ${signals.SIGILL}`)
var sigill = signals.SIGILL;
console.log(`Sigabrt: ${signals.SIGABRT}`)
var sigabrt = signals.SIGABRT;
console.log(`Sigfpe: ${signals.SIGFPE}`)
var sigfpe = signals.SIGFPE;
console.log(`Sigkill: ${signals.SIGKILL}`)
var sigkill = signals.SIGKILL;
console.log(`Sigsegv: ${signals.SIGSEGV}`)
var sigsegv = signals.SIGSEGV;
console.log(`Sigtermn: ${signals.SIGTERM}`)
var sigterm = signals.SIGTERM;
console.log(`Sigbreak: ${signals.SIGBREAK}`)
var sigbreak = signals.SIGBREAK;
console.log(`Sigwinch: ${signals.SIGWINCH}`)
var sigwinch = signals.SIGWINCH;



//list of errors
//console.log(errors);

console.log(`E2BIG: ${errors.E2BIG}`)
console.log(`EACCES: ${errors.EACCES}`)
console.log(`EADDRINUSE: ${errors.EADDRINUSE}`)
console.log(`EADDRNOTAVAIL: ${errors.EADDRNOTAVAIL}`)
console.log(`EAFNOSUPPORT: ${errors.EAFNOSUPPORT}`)
console.log(`EAGAIN: ${errors.EAGAIN}`)
console.log(`EALREADY: ${errors.EALREADY}`)
console.log(`EBADF: ${errors.EBADF}`)
console.log(`EBADMSG: ${errors.EBADMSG}`)
console.log(`EBUSY: ${errors.EBUSY}`)
console.log(`ECANCELED: ${errors.ECANCELED}`)
console.log(`ECHILD: ${errors.ECHILD}`)
console.log(`ECONNABORTED: ${errors.ECONNABORTED}`)
console.log(`ECONNREFUSED: ${errors.ECONNREFUSED}`)
console.log(`ECONNRESET: ${errors.ECONNRESET}`)
console.log(`EDEADLK: ${errors.EDEADLK}`)
console.log(`EDESTADDRREQ: ${errors.EDESTADDRREQ}`)
console.log(`EDOM: ${errors.EDOM}`)
console.log(`EDQUOT: ${errors.EDQUOT}`)
console.log(`EEXIST: ${errors.EEXIST}`)
console.log(`EFAULT: ${errors.EFAULT}`)
console.log(`EFBIG: ${errors.EFBIG}`)
console.log(`EHOSTUNREACH: ${errors.EHOSTUNREACH}`)
console.log(`EIDRM: ${errors.EIDRM}`)
console.log(`EILSEQ: ${errors.EILSEQ}`)
console.log(`EINPROGRESS: ${errors.EINPROGRESS}`)
console.log(`EINTR: ${errors.EINTR}`)
console.log(`EINVAL: ${errors.EINVAL}`)
console.log(`EIO: ${errors.EIO}`)
console.log(`EISCONN: ${errors.EISCONN}`)
console.log(`EISDIR: ${errors.EISDIR}`)
console.log(`ELOOP: ${errors.ELOOP}`)
console.log(`EMFILE: ${errors.EMFILE}`)
console.log(`EMLINK: ${errors.EMLINK}`)
console.log(`EMSGSIZE: ${errors.EMSGSIZE}`)
console.log(`EMULTIHOP: ${errors.EMULTIHOP}`)
console.log(`ENAMETOOLONG: ${errors.ENAMETOOLONG}`)
console.log(`ENETDOWN: ${errors.ENETDOWN}`)
console.log(`ENETRESET: ${errors.ENETRESET}`)
console.log(`ENETUNREACH: ${errors.ENETUNREACH}`)
console.log(`ENFILE: ${errors.ENFILE}`)
console.log(`ENOBUFS: ${errors.ENOBUFS}`)
console.log(`ENODATA: ${errors.ENODATA}`)
console.log(`ENODEV: ${errors.ENODEV}`)
console.log(`ENOENT: ${errors.ENOENT}`)
console.log(`ENOEXEC: ${errors.ENOEXEC}`)
console.log(`ENOLCK: ${errors.ENOLCK}`)
console.log(`ENOLINK: ${errors.ENOLINK}`)
console.log(`ENOMEM: ${errors.ENOMEM}`)
console.log(`ENOMSG: ${errors.ENOMSG}`)
console.log(`ENOPROTOOPT: ${errors.ENOPROTOOPT}`)
console.log(`ENOSPC: ${errors.ENOSPC}`)
console.log(`ENOSR: ${errors.ENOSR}`)
console.log(`ENOSTR: ${errors.ENOSTR}`)
console.log(`ENOSYS: ${errors.ENOSYS}`)
console.log(`ENOTCONN: ${errors.ENOTCONN}`)
console.log(`ENOTDIR: ${errors.ENOTDIR}`)
console.log(`ENOTEMPTY: ${errors.ENOTEMPTY}`)
console.log(`ENOTSOCK: ${errors.ENOTSOCK}`)
console.log(`ENOTSUP: ${errors.ENOTSUP}`)
console.log(`ENXIO: ${errors.ENXIO}`)
console.log(`EOPNOTSUPP: ${errors.EOPNOTSUPP}`)
console.log(`EOVERFLOW: ${errors.EOVERFLOW}`)
console.log(`EPERM: ${errors.EPERM}`)
console.log(`EPIPE: ${errors.EPIPE}`)
console.log(`EPROTONOSUPPORT: ${errors.EPROTONOSUPPORT}`)
console.log(`EPROTOTYPE: ${errors.EPROTOTYPE}`)
console.log(`ERANGE: ${errors.ERANGE}`)
console.log(`EROFS: ${errors.EROFS}`)
console.log(`ESPIPE: ${errors.ESPIPE}`)
console.log(`ESRCH: ${errors.ESRCH}`)
console.log(`ESTALE: ${errors.ESTALE}`)
console.log(`ETIME: ${errors.ETIME}`)
console.log(`ETIMEDOUT: ${errors.ETIMEDOUT}`)
console.log(`ETXTBSY: ${errors.ETXTBSY}`)
console.log(`EWOULDBLOCK: ${errors.EWOULDBLOCK}`)
console.log(`EXDEV: ${errors.EXDEV}`)



//list of priorities
//console.log(priority)

console.log(`PRIORITY_LOW: ${priority.PRIORITY_LOW}`)
console.log(`PRIORITY_BELOW_NORMAL: ${priority.PRIORITY_BELOW_NORMAL}`)
console.log(`PRIORITY_NORMAL: ${priority.PRIORITY_NORMAL}`)
console.log(`PRIORITY_ABOVE_NORMAL: ${priority.PRIORITY_ABOVE_NORMAL}`)
console.log(`PRIORITY_HIGH: ${priority.PRIORITY_HIGH}`)
console.log(`PRIORITY_HIGHEST: ${priority.PRIORITY_HIGHEST}`)



//SIGKILL is the signal that tells a process to immediately terminate, and would ideally act like process.exit().

//SIGTERM is the signal that tells a process to gracefully terminate. It is the signal that's sent from process managers like upstart or supervisord and many others.

//process.kill(process.pid, 'SIGTERM')


var obj = {
    osObject,
    totalMemory,
    freeMemory,
     platform,
     homeDir,
     cores,
     reLease,
     tempDir,
     type,
     upTime,
     uid,
     gid,
     userN,
     homediR,
     shell,
     numberOfProcesors,
     result,
     User,
     sumaCpu,
     adapterS,
     sighup,
     sigint,
     sigill,
     sigabrt,
     sigfpe,
     sigkill,
     sigsegv,
     sigterm,
     sigbreak,
     sigwinch,
     adapter1,
     adapter2,
     adapter3,
     adapter4,
     


}
module.exports = obj;

