

function saaah () {
	var asr = new Date(),
		hour= asr.getHours(),
		minute= asr.getMinutes(),
		second= asr.getSeconds(),
		daynight= 'PM'



		// AM/PM

		if ( hour < 12) {
			daynight = 'AM'

		}


		// zero = 12

		if ( hour == 0 )  {

		}


		// convering 12 hours


		if( hour > 12 ) {
			hour = hour - 12;

		}
        

        // adding 0 before hour

        if (hour < 10 ) {
        	hour = '0' + hour;
        }



        // adding 0 before minutes

        if (minute < 10 ) {
        	minute = '0' + minute;
        }



        // adding 0 before seconds

        if (second < 10 ) {
        	second = '0' + second;
        }


	document.getElementById('clock').innerHTML = hour + ':'+ minute + ':' + second + ' AM';

}

setInterval (saaah, 1000 );