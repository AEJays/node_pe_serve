#!/usr/bin/env node
const http = require('http')
const url = require("url")
const path = require('path')
const fs = require('fs')
const {isPhone, getIPv4Group} = require('./utils/tools')
const config = require('./config/index')
require("colors")
const root = path.join(path.resolve(process.argv[2] || "."),'dist')
let server = http.createServer((request,response)=>{
    // 提示用户的访问
    // console.log("userAgent".green,request.headers["user-agent"].grey)
    let userAgent = request.headers["user-agent"]
    const pathname = url.parse(request.url).pathname
    let filepath = path.join(root,pathname)
    if(pathname === "/"){
        if(isPhone(userAgent)){
            filepath = filepath + "index.html"
        }else{
            if(!fs.existsSync(filepath+"app.html")){
                let html = fs.readFileSync(__dirname+'/other/template/template.html').toString()
                let image = fs.readFileSync(__dirname+"/other/template/phone.png")
                fs.writeFileSync(filepath+"app.html",html)
                fs.writeFileSync(filepath+"phone.png",image,'binary')
            }
            filepath = filepath + "app.html"
        }
    }
    console.log("Load".green,pathname.grey)
    fs.stat(filepath,(err,stats)=>{
        if(!err && stats.isFile()){
            response.writeHead(200)
            fs.createReadStream(filepath).pipe(response)
        }else{
            response.writeHead(404);
            response.end('404 not Found')
        }
    })
})
server.listen(config.port,"0.0.0.0")
console.log("Root".green,root.grey)
getIPv4Group().map(ip=>{
    console.log("Server".green,"http://"+ip+":"+config.port)
})