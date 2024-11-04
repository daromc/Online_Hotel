document.getElementById('mydiv').style.visibility = 'hidden';
document.getElementById("logoutbtn").style.visibility = "hidden";
document.getElementById("navBar_name").style.visibility = 'hidden';
//Lab05 login logout
function getValues() {
	//First Name regexp
	let fname = document.getElementById("inputFName").value;
	let fnameregex = /^$|\s+/;
	let fnameresult  = fnameregex.test(fname);
	if(fnameresult){
		document.getElementById("errorFName").innerHTML = "<b>First Name must not have a space in it.</b>";
		document.getElementById("errorFName").style.color = "red";
	}
	else{
		document.getElementById("errorFName").innerHTML = "";
	}
	//Last Name regexp
	let lname = document.getElementById("inputLName").value;
	let lnameregex = /^$|\s+/;
	let lnameresult = lnameregex.test(lname);
	if(lnameresult){
		document.getElementById("errorLName").innerHTML = "<b>Last Name must not have a space in it.</b>";
		document.getElementById("errorLName").style.color = "red";
	}
	else{
		document.getElementById("errorLName").innerHTML = "";
	}
	//Age regexp
	let age = document.getElementById("inputAge").value;
	let ageregex = /^(12[0-0]|1[01][0-9]|[1-9]?[0-9])$/;
	let ageresult = ageregex.test(age);
	if(!ageresult){
		document.getElementById("errorAge").innerHTML = "<b>The age should be between 0 to 120.</b>";
		document.getElementById("errorAge").style.color = "red";
	}
	else{
		document.getElementById("errorAge").innerHTML = "";
	}
	//Email regexp
	let email = document.getElementById("inputEmail").value;
	let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let emailresult = emailregex.test(email);
	if (!emailresult){
		document.getElementById("errorEmail").innerHTML = "<b>The email should be like name@email.com</b>";
		document.getElementById("errorEmail").style.color = "red";
	}
	else{
		document.getElementById("errorEmail").innerHTML = "";
	}
	
	//Postal Code regexp
	let postal = document.getElementById("inputPostal").value;
	let postalregex = /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z] [0-9][ABCEGHJ-NPRSTV-Z][0-9]$/;
	let postalresult = postalregex.test(postal);
	if (postalresult){
		document.getElementById("errorPostal").innerHTML = "<b>The Postal code should be like V9C1M7</b>";
		document.getElementById("errorPostal").style.color = "red";
	}
	else{
		document.getElementById("errorPostal").innerHTML = "";
	}
	
	//Phone regexp
	let phone = document.getElementById("inputPhone").value;
	let phoneregex = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
	let phoneresult = phoneregex.test(phone);
	if (phoneresult){
		document.getElementById("errorPhone").innerHTML = "<b>The phone should be like 1234567890</b>";
		document.getElementById("errorPhone").style.color = "red";
	}
	else{
		document.getElementById("errorPhone").innerHTML = "";
	}
	
	
	if (!fnameresult && !lnameresult && ageresult && emailresult && !postalresult && !phoneresult){
		// Close the modal
		var modal = document.getElementById("exampleModal");
		var modalInstance = bootstrap.Modal.getInstance(modal);
		modalInstance.hide();
		// visible info user card, logout button and navBar name
		document.getElementById('mydiv').style.visibility = 'visible';
		document.getElementById("loginbtn").style.visibility = "hidden";
		document.getElementById("logoutbtn").style.visibility = "visible";
		document.getElementById("navBar_name").style.visibility = "visible";
		// Print info user
		document.getElementById("navBar_name").innerHTML="<span>Hello "+fname+" "+lname+"</span>";
		document.getElementById("name_card").innerHTML = "<span>" + fname +"</span>";
		document.getElementById("name_card").innerHTML += "<span> " + lname +"</span>";
		document.getElementById("email_card").innerHTML = "<span> "+ email+"</span>";
		document.getElementById("age_card").innerHTML = "<span> "+age+"</span>";
		document.getElementById("age_card").style.color = "red";
		document.getElementById("postal_card").innerHTML = "<span> "+ postal +"</span>";
		document.getElementById("postal_card").style.color = "blue";
		document.getElementById("phone_card").innerHTML = "<span> "+ phone +"</span>";
		document.getElementById("phone_card").style.color = "green";
	}
}

function out() {
	//hide info user, logout and navbar Name
	document.getElementById('mydiv').style.visibility = 'hidden';
	document.getElementById("loginbtn").style.visibility = "visible";
	document.getElementById("logoutbtn").style.visibility = "hidden";
	document.getElementById("navBar_name").style.visibility = 'hidden';
}

document.getElementById('btnSubmit').addEventListener('click', getValues);
document.getElementById('logoutbtn').addEventListener('click', out);
//End lab 05 login logout

//begin lab 06 hotel info and book a room cancel a room.

class Hotel {
  _name = "";
  _rooms = 50;
  _booked  = 10;
  _gym  = false;
  _roomTypes = ["Single", "Double", "Suite"];
  _location = "Colombia";
  _swimmingPool = true;
  _airportShuttle = true;
  _restaurants = new Map([["La Arepa Paisa", "Colombian"], 
						["Ramen House", "Japanese"], 
						["Corleone's Pizza", "Italian"]
						]);
  getroomTypes(){
	let rooms = ""; 
	for(let i= 0; i < this.roomTypes.length; i++ ) {
		if(i != (this.roomTypes.length - 1)){
			rooms += this.roomTypes[i] + ", ";
		}
		else{
			rooms += this.roomTypes[i];
		}
	}
	return rooms;
  }
  addroomTypes(room_){
	  this._roomTypes.push(room_);
  }
  get airportShuttle(){
	  if(this._airportShuttle){
		  return "True";
	  }
	  else{
		  return "False";
	  }
  }
  get swimmingPool(){
	  if(this._swimmingPool){
		  return "True";
	  }
	  else{
		  return "False";
	  }
  }
  constructor(name, city, rooms, booked, gym) {
    this._name = name;
    this._city = city;
	this._rooms = rooms;
	this._booked = booked;
	this._gym = gym;
  }
  //getters
  get name(){
	  return this._name;
  }
  get city(){
	  return this._city;
  }
  get rooms(){
	  return this._rooms;
  }
  get booked(){
	  return this._booked;
  }
  get gym(){
	  return this._gym;
  }
  get location(){
	  return this.location;
  }
  //setters
  set name(name){
	  this._name = name;
  }
  set city(city){
	  this._city = city;
  }
  set rooms(rooms){
	  this._rooms = rooms;
  }
  set booked(booked){
	  this._booked = booked;
  }
  set gym(gym){
	  this._gym = gym;
  }
  bookRoom(){
	  this._booked = this._booked + 1;
	  console.log("the room was booked and that there are: " + this._booked + " / "+ this._rooms);
	  console.log((this._rooms - this._booked) +" rooms available" );
  }
  cancelRoom(){
	this._booked = this._booked - 1;
	console.log("the room was cancel and that there are: " + this._booked + " / "+ this._rooms);
	console.log((this._rooms-this._booked) +" rooms available" );
  }
}
//create the newhotel
let newhotel = new Hotel("Chipichape Plaza","Santiago de Cali",40,20,false);
console.log(newhotel._name);
console.log(newhotel._city);
console.log(newhotel._rooms);
console.log(newhotel._booked);
console.log(newhotel._gym);

//Print hotel info  
document.getElementById("hotelName").innerHTML = "<b>"+newhotel._name+"</b>";
document.getElementById("location").innerHTML = "The <b>" +newhotel._name + "</b> is located in <b>" + newhotel._city+"</b>";
//add a roomType Honeymoon
newhotel.addroomTypes("honeymoon");
document.getElementById("roomtypes").innerHTML = "The available room types are: " + newhotel._roomTypes;
document.getElementById("shuttle").innerHTML = "<b>The hotel has airport shuttle ? </b>"+newhotel._airportShuttle;
document.getElementById("swimming_pool").innerHTML = "<b>The hotel has swimming pool ? </b>"+newhotel._swimmingPool;
document.getElementById("restaurants").innerHTML = "<b>The hotel has 3 restaurants each with a different theme: </b>";
let restaurant_items = document.getElementById("list_restaurants");
for (let [key, value] of newhotel._restaurants) {
	const listelements = document.createElement("li")
	listelements.textContent =  key + " / Type / " + value ;
	restaurant_items.appendChild(listelements);
}
//Buttons
function bookRoom_() {
	//Book 
	if(newhotel._booked < newhotel._rooms){
		newhotel.bookRoom();
	}
	document.getElementById("booked").innerHTML = "There are " + newhotel._booked + " / " + newhotel._rooms+ " rooms booked.";
	document.getElementById("booked").style.color = "green";
	document.getElementById("booked").innerText.bold();
}
function cancelRoom_() {
	//cancel 
	if(newhotel._booked > 0){
		newhotel.cancelRoom();
	}
	document.getElementById("booked").innerHTML = "There are " + newhotel._booked + " / " + newhotel._rooms+ " rooms booked.";
	document.getElementById("booked").style.color = "green";
	document.getElementById("booked").innerText.bold();
}
//Buttons Hotel
document.getElementById("book_room_lab06").addEventListener('click', bookRoom_);
document.getElementById("cancel_room_lab06").addEventListener('click', cancelRoom_);

//end lab 06

  
//date picker jQuery UI
$( function() {
    var dateFormat = "mm/dd/yy",
	//date from
    from = $( "#from" )
        .datepicker({
		  //filter the date from today	
		  minDate: 0,	
          changeMonth: true,
		  //show 2 months in the from option
          numberOfMonths: 2
    })
    .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
    }),
	//date to
    to = $( "#to" ).datepicker({
        changeMonth: true,
		//show 2 months in the to option
        numberOfMonths: 2
    })
    .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
    });
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
      return date;
    }
});

// radio buttons, represents the rooms Standard, Double, Penthouse
$( function() {
    $("#radio-1" ).checkboxradio({
      icon: false
    });
	$("#radio-2" ).checkboxradio({
      icon: false
    });
	$("#radio-3" ).checkboxradio({
      icon: false
    });
  } );
//book the room function
 function book() {
    const from = new Date($('#from').val());
	const to = new Date($('#to').val());
	//change the date from miliseconds to days.
	const days = (to - from)/(1000*60*60*24);
	console.log("you book your room from " + from.toDateString() +" to " + to.toDateString());
	console.log(days);
	
	const room_ = $('input[name="radio-1"]:checked');
	console.log("your room is:  " + room_.val());
	//select the room and print the results.
	if( isNaN(days)){
		alert("Please select a date arrival and departure.");
		$('#results_1').html("<b>Your length of stay is:  0 days</b>").css('color', 'green');
		$('#results_2').html("<b>0 days</b>").css('color', 'green');
		$('#value').html("<b>Total :  $0</b>").css('color', 'green');
	}
	else if( days == 0){
		alert("Please select a different departure date.");
		$('#results_1').html("<b>Your length of stay is:  0 days</b>").css('color', 'green');
		$('#results_2').html("<b>0 days</b>").css('color', 'green');
		$('#value').html("<b>Total :  $0</b>").css('color', 'green');
	}
	else{
		$('#results_1').html("<b>Your length of stay is:  "+ days +" days</b>").css('color', 'green');
		if(room_.val() == "Standard"){
			$('#results_2').html("<b>The Standard room cost $100 /night</b>").css('color', 'green');
			$('#value').html("<b>Total :  $"+ (100*days) +"</b>").css('color', 'green');
		}
		else if (room_.val() == "Double"){
			$('#results_2').html("<b>The Double room cost $120 /night</b>").css('color', 'green');
			$('#value').html("<b>Total :  $"+ (120*days) +"</b>").css('color', 'green');
		}
		else if (room_.val() == "Penthouse"){
			$('#results_2').html("<b>The Penthouse room cost $150 /night</b>").css('color', 'green');
			$('#value').html("<b>Total :  $"+ (150*days) +"</b>").css('color', 'green');
		}
		else{
			alert("Please select a Room type.");
		}
	}
}; 

//button book
$('#book_room').click(book);
//cancel the room function
function cancel() {
	console.log("room cancel, counters to 0.");
	$('#results_1').html("<b>Your Room was cancel.</b>").css('color', 'green');
	$('#results_2').html("<b>0 days</b>").css('color', 'green');
	$('#value').html("<b>Total :  $0</b>").css('color', 'green');
};
//button cancel
$('#cancel_room').click(cancel);

//begin lab 04
let hotelRooms = [
    {
        name: "Standard",
        bed: "Single room with a bed.",
        bar: false,
        jacuzzi: false,
        cost: 100,
        id_1: "first_bed_1",
        id_2: "first_bed_2",
        id_3: "first_bed_3"
    },
    {
        name: "Double",
        bed: "Double room with a bed.",
        bar: false,
        jacuzzi: false,
        cost: 120,
        id_1: "second_bed_1",
        id_2: "second_bed_2",
        id_3: "second_bed_3"
    },
    {
        name: "Penthouse",
        bed: "King size bed",
        bar: true,
        jacuzzi: true,
        cost: 150,
        id_1: "third_bed_1",
        id_2: "third_bed_2",
        id_3: "third_bed_3"
    }
]
//document.getElementById(hotelRooms[0].id_1).innerHTML = hotelRooms[0].name;

for (let i =0; hotelRooms.length > i ; i++){
    document.getElementById(hotelRooms[i].id_1).innerHTML = hotelRooms[i].name;
    document.getElementById(hotelRooms[i].id_2).innerHTML = hotelRooms[i].bed;
    document.getElementById(hotelRooms[i].id_3).innerHTML = "$"+hotelRooms[i].cost;
    if(hotelRooms[i].bar){
        document.getElementById(hotelRooms[i].id_3).innerHTML += "<br>" + "Bar";
    }
    if(hotelRooms[i].jacuzzi){
        document.getElementById(hotelRooms[i].id_3).innerHTML += "<br>" + "Jacuzzi"
    }
}
function room_1() {
    alert("Your room is $" + hotelRooms[0].cost + " per night");
}
function room_2() {
    alert("Your room is $" + hotelRooms[1].cost + " per night");
}
function room_3() {
    alert("Your room is $" + hotelRooms[2].cost + " per night");
}

document.getElementById('btnNum_1').addEventListener('click', room_1);
document.getElementById('btnNum_2').addEventListener('click', room_2);
document.getElementById('btnNum_3').addEventListener('click', room_3);


//API wheather
const apiKey = "d757e78ba64016ddaae7593c4cd94e01";
let url = "https://api.openweathermap.org/data/2.5/weather?lat=3.452&lon=-76.518&appid=" + apiKey;


let getweather = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log((parseFloat(data.main.temp - 273.15).toFixed(2)));
  console.log(data.weather[0].icon);
  let iconcode = data.weather[0].icon;
  let icon_image = "http://openweathermap.org/img/w/" + iconcode + ".png";
  console.log(data.weather[0].main);
  $("#weathericon").attr("src", icon_image);
  console.log($("#wicon").attr("src"));
  document.getElementById("temperature_api").innerHTML = "Temperature in Cali is: " + (parseFloat(data.main.temp - 273.15).toFixed(2))+ "&deg; celcius. " +  " " +data.weather[0].main;  
}
getweather();
//var data = JSON.parse(this.response);


//console.log("la temperatura en santiago de cali es: " + main.temp );
