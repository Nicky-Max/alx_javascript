#!/usr/bin/node
/* create a function welocome which accepts 2 arguments */
function welcome(fisrtName,lastName)
{
    /* define a variable a function */
    let fullName = fisrtName + ' ' + lastName;
    function displayFullName (){
        alert('welcome ' + fullName + '!');
    }

    displayFullName();

}

