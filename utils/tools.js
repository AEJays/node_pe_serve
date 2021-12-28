const interfaces = require("os").networkInterfaces()
function isPhone(userAgent){
    // 判断pc系统类型
    let pcType = [
        "Windows NT 5.1",
        "Windows NT 6.1",
        "Windows NT 6.2",
        "Windows NT 10",
        "Mac OS X 10_7",
        "Mac OS X 10.8",
        "Mac OS X 10_8",
        "Linux"
    ]
    // 手机系统类型
    let peType = [
        "Android",
        "Windows Phone 8",
        "like Max OS X"
    ]
    let type = true
    pcType.map((item,i)=>{
        if(userAgent.indexOf(item)!==-1){
            type = false          
        }
    })
    peType.map((item,i)=>{
        if(userAgent.indexOf(item)!==-1){
            type = true
        }
    })
    return type
}
function getIPv4Group(){
    let IPv4Group = [];
    for(var devName in interfaces){
        var iface = interfaces[devName]
        iface.map((ifa,i)=>{
            if(ifa.family === "IPv4"){
                IPv4Group.push(ifa.address)
            }
        })
    }
    return IPv4Group
}
module.exports = {isPhone,getIPv4Group}