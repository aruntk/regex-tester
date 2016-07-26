const pwd = process.env.PWD
const fs = require('fs');
const path = require('path'); 

Meteor.methods({
  'files.getStructure'({folderName}){
    // Users and pwd db is needed.
    let Future = Npm.require('fibers/future');
    let myFuture = new Future();
    walk(folderName || "/tmp",(error,results)=>{
      if(error){
        myFuture.throw(error);
      }else{
        myFuture.return(results);
      }
    });
    return myFuture.wait();
  },
  'files.getFileContents'({filePath}){
    // permission checking is needed here
    let Future = Npm.require('fibers/future');
    let myFuture = new Future();

    const fs = require('fs');
    const file = path.resolve(pwd,filePath);
    fs.readFile(file, 'utf8', function(error, results) {
      if (error) {
        myFuture.throw(error);
      }
      else{
        myFuture.return(results);

      }

    });
    return myFuture.wait();
  }
});

const formats = ['txt',"md"];
const walk = (dir, done)=> {
  dir = path.resolve(pwd, dir);
  let dirName = dir.split('/').pop();
  let tree = {name:dirName,folder:true,open:true,path:dir,children:[]};
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let i = 0;
    (function next(){
      let fileName = list[i++];
      if (!fileName){

        return done(null, tree);
      } 
      file = path.resolve(dir, fileName);
      fs.stat(file, (err, stat)=> {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res)=> {
            tree.children.push(res);
            next();
          });
        } else if(formats.indexOf(file.split('.').pop()) > -1) {
          let branch = {name:fileName,path:file};
          tree.children.push(branch);
          next();
        }
        else{
          next();
        }

      });
    })();
  });
};





