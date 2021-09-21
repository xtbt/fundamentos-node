const os = require('os');
console.info(os.arch()); // System architecture
console.info(os.platform()); // System platform
console.info(os.cpus()); // System CPU info
console.info(os.constants); // System constants
console.info(os.freemem()); // System memory in bytes
console.info(os.totalmem()); // System memory in bytes

const SIZE = 1024;
function kb(bytes) {
    return bytes / SIZE;
}
function mb(bytes) {
    return kb(bytes) / SIZE;
}
function gb(bytes) {
    return mb(bytes) / SIZE;
}

console.info('Free memory (KB): ',kb(os.freemem())); // System memory KB
console.info('Free memory (MB): ',mb(os.freemem())); // System memory MB
console.info('Free memory (GB): ',gb(os.freemem())); // System memory GB

console.info('Total memory (KB): ',kb(os.totalmem())); // System memory KB
console.info('Total memory (MB): ',mb(os.totalmem())); // System memory MB
console.info('Total memory (GB): ',gb(os.totalmem())); // System memory GB

console.info('Home dir:', os.homedir()); // Home dir
console.info('Temp dir:', os.tmpdir()); // Temp dir
console.info('Hostname:', os.hostname()); // Hostname
console.info('Home dir:', os.networkInterfaces()); // Network Interfaces