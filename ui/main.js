var button=document.getelementById('counter');

var counter = 0;

button.onClick = function() {
    counter=counter + 1;
    var span = document.getelementbyId('count');
    span.innerHTML=counter.toString();
};
