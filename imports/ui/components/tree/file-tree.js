class fileTree extends Polymer.Class(
  {

    is: 'file-tree',

    properties: {


      data: {
        type: Object,
        value: ()=> {
          return {};
        },
        observe: "_dataChanged"
      },


      selected: {
        type: Object,
        value: null
      }
    },

    listeners: {
      "folderSelected": "_selectFolder"
    }
  }
){
  _dataChanged()  {
    this.$.topFolder.data = this.data;
  }


  _selectFolder(e) {
    if(this.selected) {
      this.toggleClass("selected", false, this.selected);
    }
    this.selected = e.target;
    this.toggleClass("selected", true, this.selected);
  }

  ready() {
    this._dataChanged();
  }

};

document.registerElement(fileTree.prototype.is, fileTree);
