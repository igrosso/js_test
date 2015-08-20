function reverseStr(str) {
    return str.split("").reverse().join("");
}
function addSpase(str){
    return str.split("").join(" ");
}
function getAsciiStr(str){
    var result = [];
    var prevVal = '';
    var repeat = 1;
    for (var i = 0; i < str.length; i++) {
        if(prevVal==str[i]){
            repeat++;
        } else {
            if(repeat>1){
                result[result.length-1] = result[result.length-1]+'x'+repeat;
                repeat = 1;
            }
            prevVal = str[i];
            result.push(str.charCodeAt(i));
        }
    }
    return result.join(" + ");
}
function getFactorNumbers(value){

    if(value<0){
        value = value*(-1);
        for (var i=value;i>=0;i--){
            if (value % i == 0 && i!=value){
                return i*-1;
            }
        }
    } else if(value==0){
        return 1;
    } else {
        for (var i=value;i>=0;i--){
            if (value % i == 0 && i!=value){
                return i;
            }
        }
    }
}
function getDayOfWeek(value){
    var curr = new Date;
    var results = [];
    for(var i =1;i<=6;i++){
        results.push(new Date(curr.setDate(curr.getDate() - curr.getDay()+(value-1)+(i>1?7:0))));
    }
    return results;
}

function checkColor(control){
    if(control.value==''){
        document.getElementById('color_info').style.display = 'none';
    } else {
        document.getElementById('color_info').style.display = 'block';
        document.getElementById('color_box').style.backgroundColor = control.value;
        document.getElementById('color_hex').innerHTML= control.value;
    }
}

function getColor(){
    return document.getElementById('favoriteColor').value;
}

window.onload=function() {
    document.getElementById('test_form').onsubmit=function(e) {
        e.preventDefault();
        var result = {};
        var isValid = true;
        if(document.getElementById('firstName').value!=''){
            result.FirstName = addSpase(document.getElementById('firstName').value);
            document.getElementById('firstNameError').innerHTML = '';
        } else {
            isValid = false;
            document.getElementById('firstNameError').innerHTML = 'Name can not be blank';
        }


        if(document.getElementById('lastName').value!=''){
            result.LastName = reverseStr(document.getElementById('lastName').value);
            document.getElementById('lastNameError').innerHTML = '';
        } else {
            isValid = false;
            document.getElementById('lastNameError').innerHTML = 'Last Name can not be blank';
        }


        if(document.getElementById('favoriteFood').value!=''){
            result.Food = getAsciiStr(document.getElementById('favoriteFood').value);
            document.getElementById('favoriteFoodError').innerHTML = '';
        } else {
            isValid = false;
            document.getElementById('favoriteFoodError').innerHTML = 'Food can not be blank';
        }


        if(document.getElementById('favoriteNumber').value!=''&&!isNaN(parseInt(document.getElementById('favoriteNumber').value))){
            result.Number = getFactorNumbers(document.getElementById('favoriteNumber').value);
            document.getElementById('favoriteNumberError').innerHTML = '';
        } else {
            isValid = false;
            document.getElementById('favoriteNumberError').innerHTML = 'Number can not be blank and must be a number';
        }


        if(document.getElementById('favoriteDay').value!=''){
            result.DayOfWeek = getDayOfWeek(document.getElementById('favoriteDay').value);
            document.getElementById('favoriteDayError').innerHTML = '';
        } else {
            isValid = false;
            document.getElementById('favoriteDayError').innerHTML = 'Day of Week can not be blank';
        }


        if(document.getElementById('favoriteColor').value!=''){
            result.Color = getColor();
            document.getElementById('favoriteColorError').innerHTML = '';
        } else {
            isValid = false;
            document.getElementById('favoriteColorError').innerHTML = 'Color can not be blank';
        }
        if(isValid){
            console.log(result);
        } else {
            alert('Data is Invalid')
        }

    }
}