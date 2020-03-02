const Worker=require('webworker-threads').Worker;
const express = require('express');
const app = express();

   app.get("/",(req,res)=>{
    //
    const worker=new Worker(function(){
        this.onmessage=function(){
            let counter=0;
            while(counter<1e9){
                counter++;
            }
            postMessage(counter);
        }
    })
    worker.onmessage=function(data){
        console.log(data);
    }
    worker.postMessage();
   });
    app.get('/fast', (req, res) => {
       res.send('its working');
    })
    
    app.listen(3000, () => {
        console.log('server listening at port' + 3000);
    })
