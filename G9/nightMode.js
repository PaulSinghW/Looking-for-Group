	
	function toggleNightMode() {
  var color = document.getElementById('wrapper').style.color;
    
  var backgroundColor = document.getElementById('wrapper').style.backgroundColor;
  
    
  if (backgroundColor == "black") {
        
        document.getElementById('wrapper').style.backgroundColor="#F2F2F2";
        
        
    } else {
        
        document.getElementById('wrapper').style.backgroundColor="black";
        
    }
}