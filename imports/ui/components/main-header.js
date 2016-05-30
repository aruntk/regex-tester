class mainHeader extends Polymer.Class(
  {
    is: "main-header",
    behaviors:[mwcMixin],
    properties:{
      status:{
        type:Object
      },
      counter:{
        type:Number,
        value:0
      }
    } 
  }
){
  getMeteorData(){
    this.set("status",Meteor.status().status);
  }
  increment(){
    this.counter++;
  }
};

document.registerElement(mainHeader.prototype.is, mainHeader);
