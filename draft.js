

tasks = [
    'free week', 'kitchen', 'toilets', 'dust'
]

function Person(taskassigned, position) {
    this.taskassigned = taskassigned
    this.position = position
};

var leo = new Person('', 0);
var ast = new Person('', 1);
var rod = new Person('', 2);
var mar = new Person('', 3)

const persons = [ leo, ast, rod, mar ];


function assignTaskToPerson(tasks, persons) {
    for ( let i=0; i < persons.length; i++){
        persons[i].taskassigned = tasks[i];
    }
}

function moveTaskTonextPerson(tasks, persons){
    for ( let i=0; i < persons.length; i++ ){
        
    }

}

assignTaskToPerson(tasks, persons);