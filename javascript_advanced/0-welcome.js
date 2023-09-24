#!/usr/bin/node

function welcome(fisrtName,lastName)
{
    let fullName = fisrtName + ' ' + lastName;
    function displayFullName (){
        alert('welcome ' + fullName + '!');
    }

    displayFullName();

}

welcome('Holberton', 'School');