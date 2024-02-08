const dayStart = "07:30";
const dayEnd = "17:45";

function getTime(time, duration=0){
    const [hours, minutes] = time.split(':');
    return (Number(hours * 60 ) + Number(minutes)+ Number(duration) ) * 60 * 1000;
}

const dayStartTime = getTime(dayStart)
const dayEndTime = getTime(dayEnd)

function scheduleMeeting(startTime,durationMinutes) {
    // ..TODO..
    const meettingStartTime= getTime(startTime)
    const meetingEndTime = getTime(startTime, durationMinutes)

    if(meettingStartTime < dayStartTime || meetingEndTime > dayEndTime){
        console.log('미팅 시간을 조정해주세요')
    }else {
        console.log('미팅을 잡겠습니다', )
    }
}


scheduleMeeting("7:00",15);     // false
scheduleMeeting("07:15",30);    // false
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false
scheduleMeeting("17:30",16);    // true

