function validateForm(){
    var tagline = document.forms["myForm"]["tagline"].value;
    var color = document.forms["myForm"]["color"].value;
    var size = document.forms["myForm"]["size"].value;
    var quantity = document.forms["myForm"]["quantity"].value;

    var odate = new Date();
    var day = odate.getDate();
    var month = odate.getMonth();
    var year = odate.getFullYear();

    var date = document.forms["myForm"]["date"].value;
    var name = document.forms["myForm"]["name"].value;
    var phone = document.forms["myForm"]["phone"].value;

   
    var email = document.forms["myForm"]["email"].value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  

    var address = document.forms["myForm"]["address"].value;


 
    if(tagline == ""){
        alert("TAGLINE MUST BE FILLED");
    }

    if(color == ""){
        alert("COLOR MUST BE FILLED");
    }

    if(size == ""){
        alert("SIZE MUST BE FILLED");
    }

    if(quantity == ""){
        alert("QUANTITY MUST BE FILLED");
    }

    if(date == ""){
        alert("DATE OF DELIVERY MUST BE FILLED");
    }

    if(name == ""){
        alert("NAME MUST BE FILLED");
    }

    if(phone == ""){
        alert("PHONE NO. MUST BE FILLED");
    }

    if(email == ""){
        alert("EMAIL-ID MUST BE FILLED");
    }

    if(address == ""){
        alert("ADDRESS OF DELIVERY MUST BE FILLED");
    }

    
    else{

        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length) {
            alert("PLEASE ENTER CORRECT EMAIL-ID");  
            return false;  
            
        } else {
            document.write("YOUR RECEIPT<br><br><br>");
            document.write("TAGLINE : "+tagline+"<br><br>");
            document.write("COLOR : "+color+"<br><br>");
            document.write("SIZE : "+size+"<br><br>");
            document.write("QUANTITY : "+quantity+"<br><br>");
            document.write("DATE : "+year+"-"+month+"-"+day+"<br><br>");
            document.write("DATE : "+date+"<br><br>");
            document.write("NAME : "+name+"<br><br>");
            document.write("PHONE : "+phone+"<br><br>");
            document.write("EMAIL-ID: "+email+"<br><br>");
            document.write("ADDRESS : "+address+"<br><br>");       
        }
        
    }
}