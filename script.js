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
    } else if (language === 'de') {
        headerTitle.textContent = 'Willkommen zum Programmierkurs!';
        headerDesc.textContent = 'Wählen Sie einen Kurs und lernen Sie das Programmieren mit interaktiven Aufgaben!';
        
        course1Desc.textContent = 'Lernen Sie die Grundlagen von JavaScript kennen, einschließlich Variablen, Datentypen und Syntax.';
        course2Desc.textContent = 'Erfahren Sie, wie Sie Funktionen in JavaScript erstellen und verwenden.';     
    }else if (language === 'jp') {
        headerTitle.textContent = 'プログラミングコースへようこそ！';
        headerDesc.textContent = 'コースを選んで、インタラクティブなタスクでプログラミングを学び始めましょう！';
    
        course1Desc.textContent = 'JavaScriptの基本、変数、データ型、構文を学びましょう。';
        course2Desc.textContent = 'JavaScriptで関数を作成し、使用する方法を学びましょう。';     
    } else if (language === 'cz') {
        headerTitle.textContent = 'Vítejte v kurzu programování!';
        headerDesc.textContent = 'Vyberte si kurz a začněte se učit programování s interaktivními úkoly!';
        
        course1Desc.textContent = 'Naučte se základy JavaScriptu, včetně proměnných, datových typů a syntaxe.';
        course2Desc.textContent = 'Naučte se vytvářet a používat funkce v JavaScriptu.';
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

function checkTask3() {
    const userCode = document.getElementById('task3Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task3Result').textContent = 'Task completed successfully!';
        document.getElementById('task3Result').style.color = 'green';
    } else {
        document.getElementById('task3Result').textContent = 'Try again!';
        document.getElementById('task3Result').style.color = 'red';
    }
}

function checkTask4() {
    const userCode = document.getElementById('task4Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task4Result').textContent = 'Task completed successfully!';
        document.getElementById('task4Result').style.color = 'green';
    } else {
        document.getElementById('task4Result').textContent = 'Try again!';
        document.getElementById('task4Result').style.color = 'red';
    }
}

function checkTask5() {
    const userCode = document.getElementById('task5Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task5Result').textContent = 'Task completed successfully!';
        document.getElementById('task5Result').style.color = 'green';
    } else {
        document.getElementById('task5Result').textContent = 'Try again!';
        document.getElementById('task5Result').style.color = 'red';
    }
}

function checkTask6() {
    const userCode = document.getElementById('task6Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task6Result').textContent = 'Task completed successfully!';
        document.getElementById('task6Result').style.color = 'green';
    } else {
        document.getElementById('task6Result').textContent = 'Try again!';
        document.getElementById('task6Result').style.color = 'red';
    }
}

function checkTask7() {
    const userCode = document.getElementById('task7Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task7Result').textContent = 'Task completed successfully!';
        document.getElementById('task7Result').style.color = 'green';
    } else {
        document.getElementById('task7Result').textContent = 'Try again!';
        document.getElementById('task7Result').style.color = 'red';
    }
}

function checkTask8() {
    const userCode = document.getElementById('task8Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task8Result').textContent = 'Task completed successfully!';
        document.getElementById('task8Result').style.color = 'green';
    } else {
        document.getElementById('task8Result').textContent = 'Try again!';
        document.getElementById('task8Result').style.color = 'red';
    }
}

function checkTask9() {
    const userCode = document.getElementById('task9Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task9Result').textContent = 'Task completed successfully!';
        document.getElementById('task9Result').style.color = 'green';
    } else {
        document.getElementById('task9Result').textContent = 'Try again!';
        document.getElementById('task9Result').style.color = 'red';
    }
}

function checkTask10() {
    const userCode = document.getElementById('task10Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task10Result').textContent = 'Task completed successfully!';
        document.getElementById('task10Result').style.color = 'green';
    } else {
        document.getElementById('task10Result').textContent = 'Try again!';
        document.getElementById('task10Result').style.color = 'red';
    }
}

function checkTask11() {
    const userCode = document.getElementById('task11Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task11Result').textContent = 'Task completed successfully!';
        document.getElementById('task11Result').style.color = 'green';
    } else {
        document.getElementById('task11Result').textContent = 'Try again!';
        document.getElementById('task11Result').style.color = 'red';
    }
}

function checkTask12() {
    const userCode = document.getElementById('task12Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task12Result').textContent = 'Task completed successfully!';
        document.getElementById('task12Result').style.color = 'green';
    } else {
        document.getElementById('task12Result').textContent = 'Try again!';
        document.getElementById('task12Result').style.color = 'red';
    }
}

function checkTask13() {
    const userCode = document.getElementById('task13Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task13Result').textContent = 'Task completed successfully!';
        document.getElementById('task13Result').style.color = 'green';
    } else {
        document.getElementById('task13Result').textContent = 'Try again!';
        document.getElementById('task13Result').style.color = 'red';
    }
}

function checkTask14() {
    const userCode = document.getElementById('task14Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task14Result').textContent = 'Task completed successfully!';
        document.getElementById('task14Result').style.color = 'green';
    } else {
        document.getElementById('task14Result').textContent = 'Try again!';
        document.getElementById('task14Result').style.color = 'red';
    }
}

function checkTask15() {
    const userCode = document.getElementById('task15Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task15Result').textContent = 'Task completed successfully!';
        document.getElementById('task2Result').style.color = 'green';
    } else {
        document.getElementById('task15Result').textContent = 'Try again!';
        document.getElementById('task15Result').style.color = 'red';
    }
}

function checkTask16() {
    const userCode = document.getElementById('task16Input').value.trim();
    const correctCode = 'function add(a, b) { return a + b; }';
    
    if (userCode === correctCode) {
        document.getElementById('task16Result').textContent = 'Task completed successfully!';
        document.getElementById('task16Result').style.color = 'green';
    } else {
        document.getElementById('task16Result').textContent = 'Try again!';
        document.getElementById('task16Result').style.color = 'red';
    }
}