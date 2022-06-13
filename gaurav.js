const speakeasy = require('speakeasy')

var verified = speakeasy.totp.verify({
    secret: 'cr(;@,U96G;ys:]!1GU*X3kG)DWus*0F',
    encoding: 'ascii',
    token: '944659'
})


console.log(verified)