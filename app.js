const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'file')
// const filePath = `${dirPath}/hello1.txt`
// for(i=0;i<5;i++){
    // fs.writeFileSync(`${dirPath}/hello${i}.txt`,`this is file hello${i}`)
// }
    // files.forEach((item, index)=>{
    //     fs.readFile(item[index],'utf8',(error,item1)=>{
    //         console.log(item1);
    //     })
    // })

//    fs.readFile(filePath,'utf8',(error,item)=>{
//     console.log("--------->", item);
//    })
//    fs.appendFile(filePath,'My name is Mughees Saad',(err)=>{
//     if(!err){
//         console.log('file is Updated');
//     }
//    })
//    fs.readFile(filePath,'utf8',(error,item11)=>{
//     console.log("--------->", item11);
//    })
// fs.rename(filePath,`${dirPath}/hello.txt`,(err)=>{
//     if(!err) console.log("Renamed");
// })
// fs.writeFileSync(`${dirPath}/hello.txt`,`this is file hello`)
// fs.unlink(`${dirPath}/hello.txt`,(err)=>{
//     console.log(err);
//     fs.rmdirSync('./file')
// })
const express  = require('express')

const app = express();
app.get('',(req, res)=>{
    console.log('data send by browser',req.query);
    res.send('Data has been send')
})
app.get('/user',(req, res)=>{
    res.send('Data has been send of a single user')
})
app.get('/users',(req, res)=>{
    res.send('Data has been send of a Multiple User')
})
app.get('/admin',(req, res)=>{
    res.send('Data has been send of a Admin')
})
app.listen(8000) 