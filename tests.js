// TODO real tests
var jison2json = require('./jison2json');
var grammar = "%% foo: bar { return true };";

var json = jison2json.convert(grammar);
