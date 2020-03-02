//process.env.UV_THREADPOOL_SIZE = 1;
const express = require('express');
const cluster= require('cluster');
const app = express();
/*if(cluster.isMaster){
    // cluster.fork();
    cluster.fork();
}else{*/
    function waitSeconds(duration) {
        const start = Date.now();
    
        while (Date.now() - start < duration) { }
        /*return new Promise(resolve=>{
            setTimeout(()=>{
                resolve('resolved');
            },4000);
        });*/
    
    }
    //app.use
    app.get('/fast', (req, res) => {
        console.log('request accepted');
        //waitSeconds(4000);
        
        console.log('request ended');
        /*waitSeconds(4000).then((data)=>{
            console.log(data);
            res.send('its working');
        })*/
        setTimeout(()=>{
            console.log('completed time interval');
            res.send('its working');
        },1000);
           
        
    
    })
    
    /*app.listen(3000, () => {
        console.log('server listening at port' + 3000);
    })*/
    console.log('its wowrking');
//}