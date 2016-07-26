class rtMainHeader extends Polymer.Class(
  {
    is: "rt-main-header",
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

document.registerElement(rtMainHeader.prototype.is, rtMainHeader);
