const postedJobs = [];
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
function displayPostedJobs() {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = ''; 

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
function removeJob(index) {
    postedJobs.splice(index, 1);
    displayPostedJobs();
}
function clearForm() {
    document.getElementById('jobTitle').value = '';
    document.getElementById('company').value = '';
    document.getElementById('location').value = '';
    document.getElementById('description').value = '';
}
displayPostedJobs();
