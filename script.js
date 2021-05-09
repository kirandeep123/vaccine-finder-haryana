
let slots = 0;
let address = '';
const fetchByPincode = () =>  {
  const date = moment().format('DD-MM-YYYY');
  fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=132116&date=${date}`)
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
        if(center.center_id == '559414') {
          document.getElementById("demo_sagga").innerHTML = `${session.available_capacity}  vaccine slots available in ${center.name}`;
          document.getElementById("address_sagga").innerHTML = `address : ${center.address}`
          document.getElementById("fee_sagga").innerHTML =`Any Fees : ${center.fee_type}`;
        }
        if(center.center_id == '59754') {
          document.getElementById("demo_punjabi").innerHTML = `${session.available_capacity}  vaccine slots available in ${center.name}`;
          document.getElementById("address_punjabi").innerHTML = `address : ${center.address}`
          document.getElementById("fee_punjabi").innerHTML =`Any Fees : ${center.fee_type}`;
        }
        if(center.center_id == '559419') {
          document.getElementById("demo_taraori").innerHTML = `${session.available_capacity}  vaccine slots available in ${center.name}`;
          document.getElementById("address_taraori").innerHTML = `address : ${center.address}`
          document.getElementById("fee_tararoi").innerHTML =`Any Fees : ${center.fee_type}`;
        }
        if(center.center_id == '559402') {
          document.getElementById("demo_kachwa").innerHTML = `${session.available_capacity}  vaccine slots available in ${center.name}`;
          document.getElementById("address_kachwa").innerHTML = `address : ${center.address}`
          document.getElementById("fee_kachwa").innerHTML =`Any Fees : ${center.fee_type}`;
        }

      }
    }
  }
}

fetchByPincode();

