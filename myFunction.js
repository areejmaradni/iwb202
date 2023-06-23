const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var name = urlParams.get("car");
var price = urlParams.get("price");
var date = urlParams.get("date");
var rent = urlParams.get("rent");
var photo = urlParams.get("photo");
document.getElementById("carName").innerHTML += name;
document.getElementById("carPrice").innerHTML += price + " " + "S.P";
document.getElementById("carDate").innerHTML += date;
let p = document.getElementById("carPhoto").src = photo;
document.getElementById("carRent").innerHTML += rent;

function showdetails(){
  var elem = document.getElementById("BMW");
  if (name == "BMW") elem.style.display = "block";
  var elem = document.getElementById("ferrari");
  if (name == "ferrari") elem.style.display = "block";
  var elem = document.getElementById("Cadillac");
  if (name == "Cadillac") elem.style.display = "block";
  var elem = document.getElementById("KIA");
  if (name == "KIA") elem.style.display = "block";
  var elem = document.getElementById("lexes");
  if (name == "Lexes") elem.style.display = "block";
  var elem = document.getElementById("Mercedes");
  if (name == "Mercedes") elem.style.display = "block";
  var elem = document.getElementById("Nissan");
  if (name == "Nissan") elem.style.display = "block";
  var elem = document.getElementById("range rover");
  if (name == "range rover") elem.style.display = "block"; 
  var elem = document.getElementById("Rolls-Royce");
  if (name == "Rolls-Royce") elem.style.display = "block";  
  var elem = document.getElementById("Toyota");
  if (name == "Toyota") elem.style.display = "block";
}

var carRent = parseInt(price) / 1.06;
var fees=carRent/100;
var taxes=carRent*0.05;
document.getElementById("carrent").innerHTML = parseInt(carRent)+ " S.P";
document.getElementById("fees").innerHTML = parseInt(fees) + " S.P";
document.getElementById("tax").innerHTML = parseInt(taxes)+" S.P";

function check(){
  if(document.getElementById("check").checked ="checked")
  document.getElementById("buyform").style.display="block";
  document.getElementById("note").innerHTML = "(Remember it's " + rent + " rent)"
}
function addcap(){

  var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
      ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
  'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  var a=alpha[Math.floor(Math.random()*62)];
  var b=alpha[Math.floor(Math.random()*62)];
  var c=alpha[Math.floor(Math.random()*62)];
  var d=alpha[Math.floor(Math.random()*62)];
  var e=alpha[Math.floor(Math.random()*62)];
  var f=alpha[Math.floor(Math.random()*62)];

  var sum=a + b + c + d + e + f;

  document.getElementById("capt").innerHTML=sum;
  };


  function FieldRequired(value, errid) {
      if (!value) {
          document.getElementById(errid).innerHTML = "This field is required.";
          return false;
      } else {
          document.getElementById(errid).innerHTML = "";
          return true;
      }
  }

  var co_name = document.getElementById("costmer_name");
  var co_Nationalnumb = document.getElementById("costmer_nationalnumb");
  var co_number = document.getElementById("costmer_phone");
  var co_email = document.getElementById("costmer_email");
  var co_birthdate = document.getElementById("birthdate");
  var co_rent = document.getElementById("costmer_rent");
  
  function CheckName() {
      if (!FieldRequired(co_name.value, "errName")) return false;
      var name_check = /[ا-ي]+\s[ا-ي]+$/;
      var pos = co_name.value.search(name_check);
      if (pos != 0) {
          var text = "Full Name only has letters.";
          document.getElementById("errName").innerHTML = text;
          co_name.focus();
          return false;
      } else {
          document.getElementById("errName").innerHTML = "";
          return true;
      }
  }

  function CheckId() {
      if (!FieldRequired(co_Nationalnumb.value, "errId")) return false;
      var Nationalnumb_check = /0[1-9]\d{9}$|1[1-4]\d{9}$/;
      var pos = co_Nationalnumb.value.search(Nationalnumb_check);
      if (pos != 0) {
          var text = "The national number is incorrect It must consist of 11 digits and the two digits to the left symbolize the governorate (01-02-03-04-05-06-07-08-09-10-11-12-13-14";
          document.getElementById("errId").innerHTML = text;
          co_Nationalnumb.focus();
          return false;
      } else {
          document.getElementById("errId").innerHTML = "";
          return true;
      }
  }

  function CheckPhone() {
      if (!FieldRequired(co_number.value, "errNumber")) return false;
      var pos = co_number.value.search(/09[345689]\d{7}$/);
      if (pos != 0) {
          var text = "Phone Number has to start 09 and must consist of 10 numbers and must match the MTN and Syriatel numbers";
          document.getElementById("errNumber").innerHTML = text;
          co_number.focus();
          return false;
      } else {
          document.getElementById("errNumber").innerHTML = "";
          return true;
      }
  };

  function CheckEmail() {
      if (!FieldRequired(co_email.value, "errEmail")) return false;
      var pos = co_email.value.search(/\w+@\w+\.\w/);
      if (pos != 0) {
          var text = "You have entered an invalid email address : someone@example.com";
          document.getElementById("errEmail").innerHTML = text;
          co_email.focus();
          return false;
      } else {
          document.getElementById("errEmail").innerHTML = "";
          return true;
      }
  };

  function ValidCaptcha() {
      var string1 = document.getElementById('capt').innerText;
      var string2 = document.getElementById('validate_capt').value;
      if (string1 == string2 ) {
          document.getElementById('SuccCaptcha').innerText = "Match"
          document.getElementById('errCaptcha').innerText = ""
          return true;
      } else {
          document.getElementById('SuccCaptcha').innerText = ""
          document.getElementById('errCaptcha').innerText = "Mismatch"
          return false;
      }
  }
  function CheckDate() {
      if (!FieldRequired(co_birthdate.value, "errDate"))
      return false;
      else return true;
  };
  function CheckRent() {
      if (!FieldRequired(co_rent.value, "errRent"))
      return false;
      else return true;
  };

  function ValidationForm() {
      ValidCaptcha();
      CheckName();
      CheckId();
      CheckPhone();
      CheckEmail();
      CheckRent();
      CheckDate();
      if (ValidCaptcha() && CheckName() && CheckId() && CheckPhone() && CheckEmail() && CheckRent() && CheckDate())
          alert ("Your name is: " + co_name.value +"\n"+ 
      "Your National number is: " + co_Nationalnumb.value + "\n" +
      "Your Birthday is: " + co_birthdate.value + "\n" +
      "Your phone number is: " + co_number.value + "\n" +
      "Your email is: " + co_email.value + "\n" +
      "you need the car for: " + co_rent.value );
      else (alert("please enter a valid data"));;

    };