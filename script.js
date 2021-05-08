
let slots = 0;
let address = '';
const fetchByPincode = () =>  {
  //sendEmail();
  //console.log('fetch by pin code');
  fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=132116&date='08-05-2021'")
  .then(response => response.json()).
  then(data=> {
    console.log(data);
    if(data.centers) {
      checkSessions(data.centers);
    }
  });
  
}


const checkSessions = (centers) => {
  for(let center of centers) {
    for(let session of center.sessions) {
      if(session.available_capacity) {
        console.log(`${session.available_capacity}  vaccine slots available in ${center.address}` );
        document.getElementById("demo").innerHTML = `${session.available_capacity}  vaccine slots available in ${center.name}`;
      }
      else{
        console.log('session not available');
      }
    }
  }
}
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "kiransraa1993@gmail.com",
    Password: "deep@Kiran123",
    To: 'kiransraa1993@gmail.com',
    From: "kiransraa1993@gmail.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  })
    .then(function (message) {
      alert("mail sent successfully", message);
    });
}

fetchByPincode();

