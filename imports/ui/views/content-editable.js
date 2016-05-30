class contentEditable extends Polymer.Class(
  {
    is: "content-editable",
    properties:{
      iHtml:{
        type:String,
        value:""
      },
      preClass:{
        type:String,
        notify:true,
        reflectToAttribute:true,
        value:""
      },
      preText:{
        type:String,
        notify:true,
        reflectToAttribute:true,
        value:""
      }
    },
    listeners: {
      //"blur":"triggerChange",
      "keyup":"keyUpTrigger",
      "paste":"triggerChange",
      "cut":"triggerChange"
    }
  }
){
  ready(){
    this.iHtml = this.innerHTML;
  }
  keyUpTrigger(){

    this.savedSel = saveSelection(this);
    this.triggerChange();
    restoreSelection(this,this.savedSel);
  }
  triggerChange(){
    if(this.innerHTML !== this.iHtml){
      this.iHtml = this.innerHTML;
      this.fire('edited', {
        html:this.innerHTML,
        text:this.innerText
      });
    }
  }
};

document.registerElement(contentEditable.prototype.is, contentEditable)
