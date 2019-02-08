var add, subtract, input, sum, adding, calculate;
add = document.getElementById('adding');
subtract = document.getElementById('subtracting');

// sum = document.querySelector('h1').innerHTML=0;
var count = 0;
document.querySelector('#inputs').value = 1;
add.addEventListener('click', function(){
    count = count + parseInt(document.querySelector('#inputs').value);
    if(count < 0) $('h1').css('color', "red");
    else if(count >= 0) $('h1').css('color','black');
    document.querySelector('h1').textContent = count;

});



subtract.addEventListener('click',function(evt){
    count = count - parseInt(document.querySelector('#inputs').value);
    if(count < 0) $('h1').css('color', "red"); 
    else if(count >= 0) $('h1').css('color','black');
    document.querySelector('h1').textContent = count;
})
