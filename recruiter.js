// Sample data for posted jobs
const postedJobs = [];

// Function to post a new job
function postJob() {
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    if (jobTitle && company && location && description) {
        const newJob = {
            title: jobTitle,
            company: company,
            location: location,
            description: description
        };

        postedJobs.push(newJob);
        displayPostedJobs();
        clearForm();
    } else {
        alert('Please fill in all the fields.');
    }
}

// Function to display posted jobs
function displayPostedJobs() {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = ''; // Clear previous job listings

    postedJobs.forEach((job, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <button onclick="removeJob(${index})">Remove Job</button>
        `;
        jobList.appendChild(listItem);
    });
}

// Function to remove a posted job
function removeJob(index) {
    postedJobs.splice(index, 1);
    displayPostedJobs();
}

// Function to clear the job posting form
function clearForm() {
    document.getElementById('jobTitle').value = '';
    document.getElementById('company').value = '';
    document.getElementById('location').value = '';
    document.getElementById('description').value = '';
}

// Initial display of posted jobs on page load
displayPostedJobs();
