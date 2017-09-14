function $(id){
		var element = document.getElementById(id);
		if(element == null )
			alert( 'Programmer error: ' + id + ' does not exist.' );
		return element;
	}
	
  function validateForm() {
	var re = /^[A-Za-z]+$/;
    var x = document.forms["registerForm"]["fname"].value;
	document.getElementById('alertName').innerHTML = '';
    document.getElementById('alertLastName').innerHTML = '';
	document.getElementById('alertLogin').innerHTML = '';
	document.getElementById('alertPassword').innerHTML = '';
	document.getElementById('alertSecondPassword').innerHTML = '';
			
	if (x == "") {
		document.getElementById("alertName").innerHTML="*This field is required.";
        return false;
    }
	if (!x.match(re)){
		document.getElementById("alertName").innerHTML="*Name can not include numbers or whitespace.";
		return false;
	}
	
	var y = document.forms["registerForm"]["lname"].value;
	
	if (y == "") {
        document.getElementById('alertLastName').innerHTML = '';
		document.getElementById("alertLastName").innerHTML="*This field is required.";
        return false;
    }
	if (!y.match(re)){
		document.getElementById('alertLastName').innerHTML = '';
		document.getElementById("alertLastName").innerHTML="*Last name can not include numbers or whitespace.";
		return false;
	}
	
   

	var loginx = document.forms["registerForm"]["login"].value;
	
	if (loginx == "") {
		document.getElementById('alertLogin').innerHTML = '';
		document.getElementById("alertLogin").innerHTML="*This field is required.";
        return false;
    }
	if (!loginx.match(re)){
		document.getElementById('alertLogin').innerHTML = '';
		document.getElementById("alertLogin").innerHTML="*Login can not include numbers or whitespace.";
		return false;
	}
	
 

	var w = document.forms["registerForm"]["password"].value;
	var m = document.forms["registerForm"]["cpassword"].value;
   
	var letters = /^[0-9a-zA-Z]+$/;  
	
	
	
	if (w != m) {
		document.getElementById("alertSecondPassword").innerHTML="*The passwords do not match.";
        return false;
	}
	
	if (w == "") {
		document.getElementById("alertPassword").innerHTML="*This field is required.";
        return false;
    }

	if (m == ""){  
		document.getElementById('alertSecondPassword').innerHTML = '*This field is required';
		return false;  
	}
	
		if (!(w).match(letters)) {
		document.getElementById('alertPassword').innerHTML = '*Your password can contain only letters and numbers';
		return false;  
	}
	
	if (w.length < 5) {
		document.getElementById('alertPassword').innerHTML = '*Your password should be at least five characters';
		return false;
	}
	
	if (!(m).match(letters)) {
		document.getElementById('alertSecondPassword').innerHTML = '*Your password can contain only letters and numbers';
		return false;  
	}
	
	if (m.length < 5) {
		document.getElementById('alertSecondPassword').innerHTML = '*Your password should be at least five characters';
		return false;
	}
	
	if((w).match(letters) && w == m) {
	return true;  
	}
	
		
}
	
	
	function toggleNightMode() {
  var color = document.getElementById('wrapper').style.color;
    
  var backgroundColor = document.getElementById('wrapper').style.backgroundColor;
  
    
  if (backgroundColor == "black") {
        
        document.getElementById('wrapper').style.backgroundColor="#F2F2F2";
        
        
    } else {
        
        document.getElementById('wrapper').style.backgroundColor="black";
        
    }
}