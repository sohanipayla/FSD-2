var PM=require("path");
path1=PM.dirname("D:/LJ/fsd.html")
console.log(path1)
path2=PM.basename("D:/LJ/fsd.html")
console.log(path2)
path3=PM.extname("D:/LJ/fsd.html")
console.log(path3)
path4=PM.parse("D:/LJ/fsd.html")
console.log(path4)
if(path3==".html"){
    console.log("it is a html file")
}
else{
    console.log("other Documnet")
}