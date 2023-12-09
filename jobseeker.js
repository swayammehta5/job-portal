const jobListings = [
    { title: 'Software Developer', company: 'Tech Co.', location: 'City A', image: 'images/software developer.jpeg' },
    { title: 'Data Analyst', company: 'Data Corp.', location: 'City B', image: 'images/data analyst.jpeg' },
    { title: 'UX Designer', company: 'Design Studio', location: 'City C', image: 'images/ux designer.jpeg' },
    { title: 'Frontend Developer', company: 'Web Solutions', location: 'City D', image: 'images/frontend developer.jpeg' },
    { title: 'Marketing Specialist', company: 'Ad Agency', location: 'City E', image: 'images/marketing specialist.jpeg' },
    { title: 'Project Manager', company: 'Management Inc.', location: 'City F', image: 'images/project manager.jpeg' },
    { title: 'Data Scientist', company: 'Big Data Co.', location: 'City G', image: 'images/data scientist.jpeg' },
    { title: 'Graphic Designer', company: 'Creative Designs', location: 'City H', image: 'images/graphic designer.jpeg' },
    
];


function populateJobListings(jobs) {
    const jobListingsSection = document.getElementById('jobListings');
    jobListingsSection.innerHTML = ''; 

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        const imageElement = document.createElement('img');
        imageElement.src = job.image; 
        imageElement.alt = `${job.title} Image`;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('job-card-content');

        const titleElement = document.createElement('h2');
        titleElement.textContent = job.title;

        const companyElement = document.createElement('p');
        companyElement.textContent = `Company: ${job.company}`;

        const locationElement = document.createElement('p');
        locationElement.textContent = `Location: ${job.location}`;

        const applyButton = document.createElement('button');
        applyButton.textContent = 'Apply Now';
        applyButton.addEventListener('click', () => applyToJob(job.title));

        contentDiv.appendChild(titleElement);
        contentDiv.appendChild(companyElement);
        contentDiv.appendChild(locationElement);
        contentDiv.appendChild(applyButton);

        jobCard.appendChild(imageElement);
        jobCard.appendChild(contentDiv);

        jobListingsSection.appendChild(jobCard);
    });
}
function applyToJob(jobTitle) {
    alert(`You applied to the job: ${jobTitle}`);
}
function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchCategory = document.getElementById('searchDropdown').value;
    
    const filteredJobs = jobListings.filter(job => {
        const searchValue = job[searchCategory].toLowerCase();
        return searchValue.includes(searchTerm);
    });

    populateJobListings(filteredJobs);
}
populateJobListings(jobListings);