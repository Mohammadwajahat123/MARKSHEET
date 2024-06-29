var name = prompt('Enter your name');
var roll = prompt('Enter your roll number');
var standard = prompt('Enter your class');
var math = prompt('Enter your math marks');
var urdu = prompt('Enter your urdu marks');
var physic = prompt('Enter your physic marks');
var chemistry = prompt('Enter your chemistry marks');
var english = prompt('Enter your english marks');
var obtained_marks = parseInt(math) + parseInt(urdu) + parseInt(physic) + parseInt(chemistry) + parseInt(english);
var percentage = obtained_marks * 100 / 500;
document.write('your Name is: ' + name + '<br/>');
document.write('your Roll number is:' +roll+ '<br/>');
document.write('your Class is:' + standard + '<br/>');
document.write('your total marks is:' +obtained_marks+"<br/>");
document.write('your percentage is:' + percentage + '<br/>');
if(percentage >=90){
    document.write('your Grade is: A+1')
}
else if (percentage >= 80){
    document.write('your Grade is: A <br/>')
}
else if (percentage >=70){
    document.write('your Grade is: B <br/>')
}
else if ( percentage >=60){
    document.write('your Grade is: C <br/>')
}
else if (percentage >=50){
    document.write('your Grade is: D <br/>')
}
else if (percentage >=40){
    document.write('your Grade is: E <br/>')
}
else {
    document.write( 'sorry you are failed need improvement <br/>')
}

if(percentage >=90){
    document.write('Remarks is: Excellent <br/>')
}
else if (percentage >= 80){
    document.write('Remarks is: very Good ')
}
else if (percentage >=70){
    document.write('Remarks is: Awesome <br/>')
}
else if ( percentage >=60){
    document.write('Remarks is: Good <br/>')
}
else if (percentage >=50){
    document.write('Remarks is: Nice <br/>')
}
else if (percentage >=40){
    document.write('Remarks is: Disqualify  <br/>')
}
else {
    document.write( 'sorry you are failed need improvement ')
}


























