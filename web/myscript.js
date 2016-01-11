var deanzaCourses = [
    'Introduction to Programming in C',
    'Intermediate Programming in C',
    'Assembly Language',
    'Discrete Mathematics',
    'Intermediate Java Programming',
    'Advanced Java Programming'
];

var sjsuCourses = [
    'Object Oriented Design and Analysis',
    'Data Structures & Algorithms',
    'Programming Paradigms',
    'Database Management System',
    'Formal Languages & Computability',
    'Software Engineering'
];

var projects = [
    {
	name: 'Car Configuration (06/2014)',
	image: 'img/car.png',
	description:
		[
		    'Developed a car configuration website using J2EE, Servlet, JSP, Maven, and Bootstrap',
		    'Scaled the website by using multithreaded servers, synchronized data, and created a customized exception handler'
		]
    },
    {
	name: 'Bank System (12/2014)',
	image: 'img/banking.gif',
	description:
		[
		    'Created JDBC application that simulates functionalities of a bank',
		    'Grouped SQL statements into transaction to maintain the atomicity'
		]
    },
    {
	name: 'Operating System Simulation (03/2015)',
	image: 'img/os.png',
	description:
		[
		    'Implemented different scheduler algorithms of the operating system in Java',
		    'Created a multithreaded application in C and specified critical regions to avoid race condition as well as deadlock'
		]
    },
    {
	name: 'Chat Room (5/2014)',
	image: 'img/chatApp.png',
	description:
		[
		    'Developed a Java web-based chat application that allows multiple people to join in a conversation',
		    'Used Javascript, JSON, and RESTful web service for the communication between the server and clients'
		]
    },
    {
	name: 'Airport Management System (12/2013)',
	image: 'img/hashTable.png',
	description:
		[
		    'Led a team of 4 to build a C application that manage a list of airports from around the world',
		    'Implemented binary search tree and hash table in C to manage an airport list efficiently and meet different requirements from customers',
		    'Made the hash table resizable to maintain the efficiency and adapt with an increasing number of airports'
		]
    }
];


$(document).ready(function () {
    loadDeanzaCourses();
    loadSJSUCourses();
    loadProjects();
    addHoverImg();
});

function loadDeanzaCourses() {
    $.each(deanzaCourses, function (index) {
	var footer = $('<footer>').text(deanzaCourses[index]);
	$('#deanzaCourses').append(footer);
    });
}

function loadSJSUCourses() {
    $.each(sjsuCourses, function (index) {
	var footer = $('<footer>').text(sjsuCourses[index]);
	$('#sjsuCourses').append(footer);
    });
}

function loadProjects() {
    for (var i = 0; i < projects.length; i++) {
	var divRow = $('<div>').addClass('row').css({
	    marginTop: '10px'
	});
	var colSm3 = $('<div>').addClass('col-sm-3').css({
	    textAlign: 'center'
	});
	var colSm9 = $('<div>').addClass('col-sm-9');

	var img = $('<img src="' + projects[i].image + '" />');
	colSm3.append('<img src="' + projects[i].image + '" />');
	var ul = $('<ul>');
	for (var j = 0; j < projects[i].description.length; j++) {
	    ul.append('<li>' + projects[i].description[j] + '</li>');
	}
	colSm9.append(ul);

	divRow.append(colSm3);
	divRow.append(colSm9);

	$('#projects').append(divRow);
        if (i !== projects.length - 1) {
            $('#projects').append($('<hr>'));
        }
    }
}

function addHoverImg() {
    var imgWidth = '150px';
    $('#projects img').each(function () {
	var width = $(this).css('width');
	$(this).hover(function () {
	    $(this).animate({
		width: '350px',
		zIndex: '1',
		height: 'auto'
	    }, 300);
	}, function () {
	    $(this).animate({
		width: imgWidth,
		height: 'auto'
	    }, 100);
	    $(this).css({
		width: imgWidth,
		height: 'auto'
	    });
	});
    });
}


