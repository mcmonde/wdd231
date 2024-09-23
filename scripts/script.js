document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById('navMenu');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const currentYear = document.getElementById('currentYear');
    const lastModifiedDate = document.getElementById('lastModified');

    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Update current year and last modified date
    currentYear.textContent = new Date().getFullYear();
    lastModifiedDate.textContent = new Date(document.lastModified);

    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: [
                'HTML',
                'CSS'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: [
                'Python'
            ],
            completed: true
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: [
                'C#'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: [
                'HTML',
                'CSS',
                'JavaScript'
            ],
            completed: false
        }
    ]

    function getDistinctSubjects() {
        const subjects = courses.map(course => course.subject);
        return ['ALL', ...new Set(subjects)];
    }

    function generateDynamicButtons() {
        const buttonsContainer = document.getElementById('buttons-container');
        const subjects = getDistinctSubjects();

        subjects.forEach(subject => {
            const button = document.createElement('button');
            button.textContent = subject;
            button.onclick = () => filterCourses(subject);
            buttonsContainer.appendChild(button);
        })
    }

    function displayCourses(filteredCourses) {
        const coursesContainer = document.getElementById('courses-container');
        coursesContainer.innerHTML = '';

        filteredCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'course-card';

            if (course.completed) {
                courseDiv.style.backgroundColor = '#fff9e6';
                courseDiv.style.borderLeftColor = '#ffc107';
            } else {
                courseDiv.style.backgroundColor = '#edf2f7';
                courseDiv.style.borderLeftColor = '#718096';
            }

            courseDiv.innerHTML = `
            <h3>${course.title} (${course.subject} ${course.number})</h3>
            <p><span class="credits">Credits:</span> ${course.credits}</p>
            <p>${course.description}</p>
            <p class="technology">Technologies: ${course.technology.join(', ')}</p>
            <hr>
        `;
            coursesContainer.appendChild(courseDiv);
        });
    }

    function filterCourses(subject) {
        if (subject === 'ALL') {
            displayCourses(courses);
        } else {
            const filteredCourses = courses.filter(course => course.subject === subject);
            displayCourses(filteredCourses);
        }
    }

    generateDynamicButtons();
    displayCourses(courses);
});
