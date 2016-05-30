class fileFolder extends Polymer.Class(
  {

    is: 'file-folder',

    properties: {

      data: {
        type: Object,
        value: ()=> {
          return {};
        }
      },

    }
  }
){
  _determineClass(open, children) {
    return 'parent ' + ((open && children && children.length) ? 'expanded' : children && children.length ? 'collapsed' : '');
  }

  _determineIcon(folder) {
    return folder ? 'folder' : 'description';
  }

  selectFolder(e) {
    this.fire("folderSelected", this);
  }

  toggleChildren(e) {
    this.set("data.open", !this.data.open && this.data.children && this.data.children.length);
  }

};
document.registerElement(fileFolder.prototype.is,fileFolder);
