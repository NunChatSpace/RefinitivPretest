const https = require('https')
const argvs = process.argv.slice(2)


https.get({
    host: 'codequiz.azurewebsites.net',
    path: '/',
    method: 'GET',
    headers: {
        'Cookie': 'hasCookie=true;'
    }
}, (res) => {
    var data = ''
    res.on('data', (chunk) => {
        // console.log('chunk', chunk)

        data += chunk
    })
    res.on('end', () => {
        // console.log('end: ', data)
        findNAV(data)
    })
}).on('error', (err) => {
    console.log(err)
})

const findNAV = (data) => {
    console.log(argvs[0])
    var idx = data.indexOf(argvs[0]);
    var offset = argvs[0].length + 9;
    var navData = '';
    var skipCount = 0;
    for (var i = idx + offset; i < data.length; i++) {
        if ((data[i] >= '0' && data[i] <= '9') || data[i] === '.') {
            navData += data[i];
        } else {
            if (skipCount < 2) {
                skipCount++;
                continue;
            }
            break;
        }
    }
    console.log(navData)
}