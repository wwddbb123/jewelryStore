

const jiezhiService=require("../service/jiezhiService")

function jiezhi(req, res){
    let index=req.query.index;
    jiezhiService.jiezhi(index,function(results) {
        res.send(results)
    })
}
function jiezhiNum(req, res){
    jiezhiService.jiezhiNum(function(results) {
        res.send(results)
    })
}
function wxshuju(req, res){
    jiezhiService.wxshuju(function(results) {
        res.send(results)
    })
}
function findall(req, res){
    let storename=req.query.storename
    jiezhiService.findall(storename,function(results) {
        res.send(results)
    })
}
function gouwucheadd(req, res){
    let obj=JSON.parse(req.query.obj)
    let cookie=req.cookies.name
    
    jiezhiService.gouwucheadd(obj,cookie,function(results) {
        res.send(results)
    })
}
function gouwuche(req, res){
    
    let cookie=req.cookies.name
    // console.log(cookie)
    jiezhiService.gouwuche(cookie, function(results) {
        res.send(results)
    })
}
function gouwuchedel(req, res){
    let obj=req.query.obj
    // console.log(req.query.obj)
    jiezhiService.gouwuchedel(obj,function(results) {
        res.send(results)
    })
}
function jiezhidel(req, res){
    let id=req.query.id
    jiezhiService.jiezhidel(id,function(results) {
        res.send(results)
    })
}
function jiezhidelall(req, res){
    let arrid=req.query.arrid
    jiezhiService.jiezhidelall(arrid,function(results) {
        res.send(results)
    })
}
function jiezhiadd(req, res){
    let obj=req.query.obj
    let objs=JSON.parse(obj)
    jiezhiService.jiezhiadd(objs,function(results) {
        res.send(results)
    })
}
function jiezhifond(req, res){
    let storename=req.query.storename
    jiezhiService.jiezhifond(storename,function(results) {
        res.send(results)
    })
}
  exports.jiezhi=jiezhi;
  exports.jiezhiNum=jiezhiNum;
  exports.jiezhidel=jiezhidel;
  exports.jiezhidelall=jiezhidelall;
  exports.jiezhiadd=jiezhiadd;
  exports.jiezhifond=jiezhifond;
  exports.wxshuju=wxshuju;
  exports.findall=findall;
  exports.gouwucheadd=gouwucheadd;
  exports.gouwuche=gouwuche;
  exports.gouwuchedel=gouwuchedel;






