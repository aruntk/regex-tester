let a = [];
for(i=0;i<20;i++){
  a.push({
    "name": `File ${i}`,
    "open": true
  })
}
Polymer({
  is:"main-layout",
  properties:{
    files:{
      type:Object,
      value:{
        "name": "Case 1",
        "open": true,
        "folder":true,
        "children": a     
      }
    }
  }
})
