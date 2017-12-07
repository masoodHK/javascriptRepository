var event = require('events')
var util = require('util')
var person = function(name){
    this.name = name;
}
util.inherits(person, event.EventEmitter)
var James = new person("james")
var Jack = new person("jack")
var people = [James, Jack]

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + " said: " + mssg)
    })
})
James.emit('speak', "Hey there")
Jack.emit('speak', "Whats up mates")