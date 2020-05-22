# ReactApp

An app built with React

First installing Bootstrap package:
-needed jquery : npm i jquery
-needed popup.js : npm i popper.js@1.16.0 => https://www.npmjs.com/package/popper.js/v/1.16.0 || Not popper/core or popper@14
-after the above dependencies : $ npm install bootstrap --save
In main.js 
"import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';"
=> import 'bootstrap/dist/css/bootstrap.min.css'; => doesn't work => downloaded and linked in html ||beware on upgrade
Article on this : https://www.techiediaries.com/react-bootstrap/
