class rtMainLayout extends Polymer.Class(
  {
    is:"rt-main-layout",
    properties:{
      files:{
        type:Object,
        value:{
          "name": "/tmp/regex",
          "open": true,
          "folder":true,
          "children": []     
        }
      },
      selContent:String
    },
    listeners: {
      "folderSelected": "_selectFolder"
    }
  }
){
  attached(){
    this.refreshStructure();
  }
  refreshStructure(){
    Meteor.call('files.getStructure',{folderName:"/tmp/regex"},(e,r)=>{
      if(e){
        console.log(e)
      }
      this.set('files',r);

    });


  }
  _selectFolder(e){
    const data = e.detail.data;
    if(!data.folder){
      Meteor.call('files.getFileContents',{filePath:data.path},(e,r)=>{
        if(e){
          console.log(e)
        }
        this.set('selContent',r);
      });
    }
  }
};
document.registerElement(rtMainLayout.prototype.is,rtMainLayout);
