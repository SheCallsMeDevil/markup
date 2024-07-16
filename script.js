document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    var students = [
        {
            class: 1,
            roll: 1,
            name: formData.get('name1'),
            math: formData.get('math1'),
            science: formData.get('science1'),
            nepali: formData.get('nepali1'),
            social: formData.get('social1'),
            health: formData.get('health1')
        },
        {
            class: 1,
            roll: 2,
            name: formData.get('name2'),
            math: formData.get('math2'),
            science: formData.get('science2'),
            nepali: formData.get('nepali2'),
            social: formData.get('social2'),
            health: formData.get('health2')
        },
        {
            class: 1,
            roll: 3,
            name: formData.get('name3'),
            math: formData.get('math3'),
            science: formData.get('science3'),
            nepali: formData.get('nepali3'),
            social: formData.get('social3'),
            health: formData.get('health3')
        }
    ];
    
    fetch('https://script.google.com/macros/s/AKfycbyl9oRXdkGwgHkDBBTg-IouKvdzRQIVzid9L0bTmqcLIHlbQwKiryPicIoFtpTLnhiYpg/exec', {
        method: 'POST',
        body: JSON.stringify(students),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
        this.reset(); // Reset the form after successful submission
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
