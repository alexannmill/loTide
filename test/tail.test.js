const assertEqual = require("../assertEqual");
const tail = require("../tail");


assertEqual(tail("hello"), "ello");
assertEqual(tail("alex"), "lex");