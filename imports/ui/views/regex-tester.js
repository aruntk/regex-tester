import "./content-editable.html";
class regexTester extends Polymer.Class(
  {
    is: "regex-tester",
    behaviors:[mwcMixin],
    properties:{
      regex:{
        type:String,
        value:`([A-Z])\\w+`,
        observer:"colorize"
      },
      selContent:{
        type:String,
        observer:"contentChanged",
        value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    }
  }
){
  getMeteorData(){
  }
  ready(){
  }
  contentChanged(){

    this.highlight(this.$.subject,this.regex,"match");

  }
  colorize(e){
    RegexColorizer.colorizeAll();
    this.regex = e.detail ? e.detail.text:e;
    this.highlight(this.$.subject,this.regex,"match");
  }
  highlight(container,queryStr,spanClass) {
    const content = this.selContent || "";
    const reg = new RegExp(queryStr, 'g');
    const finalStr = content.replace(reg, (str)=> {
      return `<span class='${spanClass}'>${str}</span>`
    }); 
    Polymer.dom(container).innerHTML = finalStr;
  }
};

document.registerElement(regexTester.prototype.is, regexTester);
