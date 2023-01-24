const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const monthNames_id = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
"Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday","Saturday"];
const dayNames_id = ["Minggu", "Senin", "Selasa", "Rabu",
"Kamis", "Jumaat","Sabtu"];

let event_date = new Date('2023/01/30 10:00');
let hour = 24;
let minute = 60;
let second = 60;

let invitation_text = document.getElementsByClassName('invitation-date');

for(let i=0 ;  i<invitation_text.length; i++){    
    if(invitation_text[i].getAttribute('lang') == 'id'){
        invitation_text[i].innerText = 
        `${dayNames_id[event_date.getDay()]}, ${event_date.getDate()} ${monthNames_id[event_date.getMonth()]} ${event_date.getFullYear()}`;
    }
    else{
        invitation_text[i].innerText = 
        `${dayNames[event_date.getDay()]}, ${event_date.getDate()} ${monthNames[event_date.getMonth()]} ${event_date.getFullYear()}`;
    }
}

const countdown = setInterval(() => {
    let date_now = Date.now();
    // console.log(event_date.getTime());
    // console.log(date_now.getHours());
    let seconds = parseInt(event_date.getTime()/1000 - date_now/1000);
    let minutes = parseInt(seconds/60);
    let hours = parseInt(minutes/60);
    let days = parseInt(hours/24);
    let hours_ = (event_date.getTime()/1000/3600) - (date_now/1000/3600);        
    hours_ = parseInt(hours_ % hour);
    let minutes_ = (event_date.getTime()/1000/60) - (date_now/1000/60);    
    minutes_ = parseInt(minutes_ % minute);
    let seconds_ = (event_date.getTime()/1000) - (date_now/1000);
    seconds_ = parseInt(seconds_ % second);    
    if(days <= 0 && hours_ <= 0 && minutes_ <= 0 && seconds_ <= 0){
        clearInterval(countdown);
    }
    else{
        document.getElementById('days').innerText = days.toString().length <=1 ? '0' + days : days;
        document.getElementById('hours').innerText = hours_.toString().length <=1 ? '0' + hours_ : hours_;    
        document.getElementById('minutes').innerText = minutes_.toString().length <=1 ? '0' + minutes_ : minutes_;
        document.getElementById('seconds').innerText = seconds_.toString().length <=1 ? '0' + seconds_ : seconds_;
    }
},1000)