# jison2json

[jison](http://jison.org) grammars come in two formats: JSON or a speciel text format similar to Bison's. This utility converts from the jison's format to JSON. See the json2jison for the reverse conversion.

## install

    npm install jison2json -g

## usage

    # single grammar
    jison2json grammar.y

    # or separate grammars
    jison2json grammar.y lex.l

Or require it and convert programatically:

    var jison2json = require('jison2json');
    var grammar = "%% foo: bar { return true };";

    var json = jison2json.convert(grammar);

## license

MIT
