// Function to change the language of the page
function changeLanguage() {
    const language = document.getElementById('languageSelect').value;
    const headerTitle = document.getElementById('headerTitle');
    const headerDesc = document.getElementById('headerDesc');
    const course1Desc = document.getElementById('course1Desc');
    const course2Desc = document.getElementById('course2Desc');
    
    if (language === 'pl') {
        headerTitle.textContent = 'Witaj w kursie programowania!';
        headerDesc.textContent = 'Wybierz kurs i rozpocznij naukę programowania z interaktywnymi zadaniami!';
        
        course1Desc.textContent = 'Poznaj podstawy JavaScript, w tym zmienne, typy danych i składnię.';
        course2Desc.textContent = 'Naucz się tworzyć i używać funkcji w JavaScript.';
    } else if (language === 'en') {
        headerTitle.textContent = 'Welcome to the Programming Course!';
        headerDesc.textContent = 'Choose a course and start learning programming with interactive tasks!';
        
        course1Desc.textContent = 'Learn the basics of JavaScript, including variables, data types, and syntax.';
        course2Desc.textContent = 'Learn how to create and use functions in JavaScript.';
    }
}

// Function to show course details
function showCourseDetails() {
    const selectedCourse = document.getElementById('courseSelect').value;
    const allCourses = document.querySelectorAll('.course-section');
    
    // Hide all courses
    allCourses.forEach(course => {
        course.style.display = 'none';
    });
    
    // Show selected course
    if (selectedCourse) {
        document.getElementById(selectedCourse).style.display = 'block';
    }
}

// Function to start a course
function startCourse(courseId) {
    document.getElementById(courseId + 'Zadanie').style.display = 'block';
    smoothScrollTo(courseId + 'Zadanie');
}

// Smooth scrolling to a specific section
function smoothScrollTo(target) {
    const element = document.getElementById(target);
    window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
    });
}

// Check tasks (same function for each task)
function checkTask1() {
    const userCode = document.getElementById('task1Input').value.trim();
    const correctCode = 'let greeting = "Hello, World!";';
    
    if (userCode === correctCode) {
        document.getElementById('task1Result').textContent = 'Task completed successfully!';
        document.getElementById('task1Result').style.color = 'green';
    } else {
        document.getElementById('task1Result').textContent = 'Try again!';
        document.getElementById('task1Result').style.color = 'red';
    }
}

function checkTask2() {
    const userCode = document.getElementById('task2Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task2Result').textContent = 'Task completed successfully!';
        document.getElementById('task2Result').style.color = 'green';
    } else {
        document.getElementById('task2Result').textContent = 'Try again!';
        document.getElementById('task2Result').style.color = 'red';
    }
}
