"use strict";

const str = "Java JavaScript PHP C++ C";
const regex = /java(script)|c([+]){2}|php/gi;
alert(str.match(regex));
