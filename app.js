let cart = [];

const courseData = {
    "course1": {
        title: "Web Design",
        description: "Learn the foundations of web development with HTML and CSS.",
        details: [
            "HTML: Structure of web pages.",
            "CSS: Styling and layout techniques.",
            "Responsive Design: Ensuring your website looks great on any device."
        ],
        image: "javascript.jpg" 
    },
    "course2": {
        title: "JavaScript Essentials",
        description: "Master JavaScript for interactive web applications.",
        details: [
            "Variables and Data Types",
            "Functions and Loops",
            "DOM Manipulation and Event Handling"
        ],
        image: "javascript.jpg" 
    },
    "course3": {
        title: "Cybersecurity",
        description: "Learn encryption and data security techniques to safeguard information.",
        details: [
            "Understanding Encryption",
            "Network Security Basics",
            "Securing Web Applications"
        ],
        image: "cybersecurity.jpg" 
    },
    "course4": {
        title: "IT Strategy Development",
        description: "Learn the process of creating a framework to use technology for business goals.",
        details: [
            "Assessing Business Needs",
            "Creating a Technology Roadmap",
            "Aligning IT Strategy with Business Strategy"
        ],
        image: "it stretegy.jpg" 
    }
};


function showCourseDetails(courseId) {
    window.location.href = `course.html?course=${courseId}`;
}


function loadCourseDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course'); // Get courseId from URL

    const course = courseData[courseId];
   

    
    document.getElementById("course-title").textContent = course.title;
    document.getElementById("course-description").textContent = course.description;

    const detailsList = document.getElementById("course-details-list");
    detailsList.innerHTML = ""; // Clear any previous list items
    course.details.forEach(detail => {
        const listItem = document.createElement("li");
        listItem.textContent = detail;
        detailsList.appendChild(listItem);
    });

  
    const courseImage = document.getElementById("course-image");
    courseImage.src = course.image; // Update the image source to the course-specific image
}


function addToCart(courseName) {
    cart.push(courseName);
    alert(courseName + " added to cart!");
}


function checkout() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = ''; // Clear any previous cart items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsElement.appendChild(li);
    });
    alert("Proceeding to payment...");
}

// Call loadCourseDetails() when course.html is loaded
document.addEventListener("DOMContentLoaded", loadCourseDetails);
