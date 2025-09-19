const get_time_table_details = () => {
	let details = {
		courseCode: [],
		courseTitle: [],
		slot: [],
		venue: [],
		facName: [],
		facSchool: [],
		allSlots: [],
	};
	let table_rows = document.getElementsByTagName('tbody')[0].children;
	for (let i = 2; i < table_rows.length - 2; i++) {
		let td = table_rows[i].children;
		let code_title = td[2].innerText.split('\n')[0].trim();
		let code = code_title.split('-')[0].trim();
		details.courseCode.push(code);

		let title = code_title.split('-')[1].trim();
		details.courseTitle.push(title);

		let slot_venue = td[7].innerText
			.replace(/(\r\n|\n|\r)/gm, '')
			.split('-');
		let slot = slot_venue[0].trim();
		details.slot.push(slot);
		details.allSlots = details.allSlots.concat(slot.split('+'));

		let venue = slot_venue[1].trim();
		details.venue.push(venue);

		let facName_school = td[8].innerText
			.replace(/(\r\n|\n|\r)/gm, '')
			.split('-');
		let fac_name = facName_school[0].trim();
		details.facName.push(fac_name);

		let facSchool = facName_school[1].trim();
		details.facSchool.push(facSchool);
	}
	return details;
};

// Google Calendar sync functionality removed

const times = {
	A1: ['T08:00:00.000+05:30', 'T09:00:00.000+05:30'],
	B1: ['T08:00:00.000+05:30', 'T09:00:00.000+05:30'],
	C1: ['T08:00:00.000+05:30', 'T09:00:00.000+05:30'],
	D1: ['T08:00:00.000+05:30', 'T10:00:00.000+05:30'],
	E1: ['T08:00:00.000+05:30', 'T10:00:00.000+05:30'],
	F1: ['T09:00:00.000+05:30', 'T10:00:00.000+05:30'],
	G1: ['T09:00:00.000+05:30', 'T10:00:00.000+05:30'],
	TA1: ['T10:00:00.000+05:30'],
	TB1: ['T11:00:00.000+05:30'],
	TC1: ['T11:00:00.000+05:30'],
	TD1: ['T12:00:00.000+05:30'],
	TE1: ['T11:00:00.000+05:30'],
	TF1: ['T11:00:00.000+05:30'],
	TG1: ['T12:00:00.000+05:30'],
	TAA1: ['T12:00:00.000+05:30'],
	TCC1: ['T12:00:00.000+05:30'],

	A2: ['T14:00:00.000+05:30', 'T15:00:00.000+05:30'],
	B2: ['T14:00:00.000+05:30', 'T15:00:00.000+05:30'],
	C2: ['T14:00:00.000+05:30', 'T15:00:00.000+05:30'],
	D2: ['T14:00:00.000+05:30', 'T16:00:00.000+05:30'],
	E2: ['T14:00:00.000+05:30', 'T16:00:00.000+05:30'],
	F2: ['T15:00:00.000+05:30', 'T16:00:00.000+05:30'],
	G2: ['T15:00:00.000+05:30', 'T16:00:00.000+05:30'],
	TA2: ['T16:00:00.000+05:30'],
	TB2: ['T17:00:00.000+05:30'],
	TC2: ['T17:00:00.000+05:30'],
	TD2: ['T17:00:00.000+05:30'],
	TE2: ['T17:00:00.000+05:30'],
	TF2: ['T17:00:00.000+05:30'],
	TG2: ['T18:00:00.000+05:30'],
	TAA2: ['T18:00:00.000+05:30'],
	TBB2: ['T18:00:00.000+05:30'],
	TCC2: ['T18:00:00.000+05:30'],
	TDD2: ['T18:00:00.000+05:30'],

	L1: ['T08:00:00.000+05:30'],
	L3: ['T09:51:00.000+05:30'],
	L5: ['T11:40:00.000+05:30'],
	L7: ['T08:00:00.000+05:30'],
	L9: ['T09:51:00.000+05:30'],
	L11: ['T11:40:00.000+05:30'],
	L13: ['T08:00:00.000+05:30'],
	L15: ['T09:51:00.000+05:30'],
	L17: ['T11:40:00.000+05:30'],
	L19: ['T08:00:00.000+05:30'],
	L21: ['T09:51:00.000+05:30'],
	L23: ['T11:40:00.000+05:30'],
	L25: ['T08:00:00.000+05:30'],
	L27: ['T09:51:00.000+05:30'],
	L29: ['T11:40:00.000+05:30'],

	L31: ['T14:00:00.000+05:30'],
	L33: ['T15:51:00.000+05:30'],
	L35: ['T17:40:00.000+05:30'],
	L37: ['T14:00:00.000+05:30'],
	L39: ['T15:51:00.000+05:30'],
	L41: ['T17:40:00.000+05:30'],
	L43: ['T14:00:00.000+05:30'],
	L45: ['T15:51:00.000+05:30'],
	L47: ['T17:40:00.000+05:30'],
	L49: ['T14:00:00.000+05:30'],
	L51: ['T15:51:00.000+05:30'],
	L53: ['T17:40:00.000+05:30'],
	L55: ['T14:00:00.000+05:30'],
	L57: ['T15:51:00.000+05:30'],
	L59: ['T17:40:00.000+05:30'],

	// "L71": ["T08:00:00.000+05:30"],
	// "L73": ["T09:51:00.000+05:30"],
	// "L75": ["T11:40:00.000+05:30"],
	// "L77": ["T14:00:00.000+05:30"],
	// "L79": ["T15:51:00.000+05:30"],
	// "L81": ["T17:40:00.000+05:30"],
	// "L83": ["T08:00:00.000+05:30"],
	// "L85": ["T09:51:00.000+05:30"],
	// "L87": ["T11:40:00.000+05:30"],
	// "L89": ["T14:00:00.000+05:30"],
	// "L91": ["T15:51:00.000+05:30"],
	// "L93": ["T17:40:00.000+05:30"]
};

const days = {
	A1: ['d1', 'd3'],
	B1: ['d2', 'd4'],
	C1: ['d3', 'd5'],
	D1: ['d4', 'd1'],
	E1: ['d5', 'd2'],
	F1: ['d1', 'd3'],
	G1: ['d2', 'd4'],
	TA1: ['d5'],
	TB1: ['d1'],
	TC1: ['d2'],
	TD1: ['d5'],
	TE1: ['d4'],
	TF1: ['d5'],
	TG1: ['d1'],
	TAA1: ['d2'],
	TCC1: ['d4'],

	A2: ['d1', 'd3'],
	B2: ['d2', 'd4'],
	C2: ['d3', 'd5'],
	D2: ['d4', 'd1'],
	E2: ['d5', 'd2'],
	F2: ['d1', 'd3'],
	G2: ['d2', 'd4'],
	TA2: ['d5'],
	TB2: ['d1'],
	TC2: ['d2'],
	TD2: ['d3'],
	TE2: ['d4'],
	TF2: ['d5'],
	TG2: ['d1'],
	TAA2: ['d2'],
	TBB2: ['d3'],
	TCC2: ['d4'],
	TDD2: ['d5'],

	L1: ['d1'],
	L3: ['d1'],
	L5: ['d1'],
	L7: ['d2'],
	L9: ['d2'],
	L11: ['d2'],
	L13: ['d3'],
	L15: ['d3'],
	L17: ['d3'],
	L19: ['d4'],
	L21: ['d4'],
	L23: ['d4'],
	L25: ['d5'],
	L27: ['d5'],
	L29: ['d5'],
	L31: ['d1'],
	L33: ['d1'],
	L35: ['d1'],
	L37: ['d2'],
	L39: ['d2'],
	L41: ['d2'],
	L43: ['d3'],
	L45: ['d3'],
	L47: ['d3'],
	L49: ['d4'],
	L51: ['d4'],
	L53: ['d4'],
	L55: ['d5'],
	L57: ['d5'],
	L59: ['d5'],
	// "L71": [""], "L73": [""], "L75": [""], "L77": [""], "L79": [""], "L81": [""], "L83": [""], "L85": [""], "L87": [""], "L89": [""], "L91": [""], "L93": [""]
};

/*
 **start = '2022-01-18'
 **end='2022-06-24'
 */
const get_dates = (end) => {
	let start_date = new Date();
	let end_date = new Date(end);
	let date = new Date(start_date.getTime());
	let dates = {
		d1: [],
		d2: [],
		d3: [],
		d4: [],
		d5: [],
	};
	let count = 0;
	while (date <= end_date) {
		let day = new Date(date).getDay();
		if (day == 1) {
			dates.d1.push(new Date(date));
		}
		if (day == 2) {
			dates.d2.push(new Date(date));
		}
		if (day == 3) {
			dates.d3.push(new Date(date));
		}
		if (day == 4) {
			dates.d4.push(new Date(date));
		}
		if (day == 5) {
			dates.d5.push(new Date(date));
		}
		date.setDate(date.getDate() + 1);

		count++;
		if (count == 7) break;
	}
	return dates;
};

const add_time = (start, add) => {
	let date = new Date(`2023${start}`);
	let new_date = new Date(date.getTime() + add * 60000);
	let time =
		'T' +
		new_date.getHours() +
		':' +
		new_date.getMinutes() +
		':' +
		'00.000+05:30';
	return time;
};

// Utility functions for time table processing

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function format_date(date) {
	date = new Date(date);
	return (
		date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
	);
}

function workingDayCount(startDate, endDate) {
	let count = 0;
	const curDate = new Date(startDate.getTime());
	while (curDate <= endDate) {
		const dayOfWeek = curDate.getDay();
		if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
		curDate.setDate(curDate.getDate() + 1);
	}
	return count;
}

const changeObj = (details) => {
	let obj = {
		allSlots: details.allSlots,
		courseInfo: [],
	};
	for (let i = 0; i < details.courseCode.length; i++) {
		obj.courseInfo.push({
			courseCode: details.courseCode[i],
			courseTitle: details.courseTitle[i],
			slot: details.slot[i],
			facName: details.facName[i],
			facSchool: details.facSchool[i],
			venue: details.venue[i],
		});
	}
	return obj;
};

const copyBtn = (details) => {
	let copyBtn = document.createElement('button');
	copyBtn.style.width = 'max-content';
	copyBtn.style.marginLeft = '49%';
	copyBtn.innerHTML = 'Copy Time Table';
	copyBtn.className = 'btn btn-primary btn-block';
	copyBtn.id = 'copyTimetable';
	let facTable = document.getElementById('timeTableStyle');
	facTable.insertAdjacentElement('afterend', copyBtn);
	let obj = changeObj(details);
	copyBtn.addEventListener('click', () => {
		let str = JSON.stringify(obj);
		let encoded = window.btoa(str);
		let decoded = window.atob(encoded);
		// console.log(encoded, decoded);
		navigator.clipboard.writeText(encoded);
	});
	/*var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    base64regex.test("SomeStringObviouslyNotBase64Encoded...");             // FALSE
    base64regex.test("U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=");   // TRUE*/
};

// Execute time table enhancements when the page loads
const initTimeTable = () => {
	try {
		const details = get_time_table_details();
		if (details.courseCode.length > 0) {
			copyBtn(details);
		}
	} catch (error) {
		// console.log('Time table enhancement error:', error);
	}
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initTimeTable);
} else {
	initTimeTable();
}
