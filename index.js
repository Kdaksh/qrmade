const{spawn:spawn}=require("child_process"),fs=require("fs"),exp=require("express"),path=require("path"),app=exp(),qrcode=require("qrcode");app.use(exp.json()),app.use(exp.static(path.join(__dirname))),app.get("/",(e,p)=>{p.statusCode=200,p.setHeader("Content-Type","text/html"),p.sendFile("./index.html")}),app.post("/api/genQr",async(e,p)=>{qrcode.toDataURL(e.body.format,{},(e,s)=>{p.json(JSON.stringify({data:s}))})}),app.listen(process.env.PORT);