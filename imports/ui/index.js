//Always import these two files before any other file.


import "./bower_components/webcomponentsjs/webcomponents-lite.min.js";
import "./bower_components/polymer/polymer.html";


//Import Globally used bower Components here .
//Also you can import all components here if you want to see them together. Another way is to import from the components which uses the element. In that way you can control the loading of dependencies by just disabling one component. check test-element.html.


import "./bower_components/iron-flex-layout/iron-flex-layout-classes.html";
import "./bower_components/paper-styles/paper-styles.html";
import "./bower_components/paper-header-panel/paper-header-panel.html";


//Import your components


import "./layouts/main-layout.html";
import "./components/main-header.html";
import "./components/tree/file-tree.html";

//views
//
import "./views/regex-tester.html";
