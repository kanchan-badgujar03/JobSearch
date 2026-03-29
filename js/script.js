const container = document.getElementById("jobs-container");

// Load saved jobs from browser
let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

function displayJobs(jobList) {
    container.innerHTML = "";

    jobList.forEach(job => {
        const isSaved = savedJobs.includes(job.id);

        const jobDiv = document.createElement("div");
        jobDiv.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
            
            <button onclick="applyJob('${job.title}')">Apply</button>
            <button onclick="saveJob(${job.id})">
                ${isSaved ? "❤️ Saved" : "🤍 Save"}
            </button>
        `;
        container.appendChild(jobDiv);
    });
}

// Apply function
function applyJob(title) {
    alert("Applied for " + title);
}

// Save job function
function saveJob(id) {
    if (savedJobs.includes(id)) {
        savedJobs = savedJobs.filter(jobId => jobId !== id);
    } else {
        savedJobs.push(id);
    }

    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
    displayJobs(jobs);
}

displayJobs(jobs);

// Search feature
document.getElementById("search").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(value)
    );
    displayJobs(filtered);
});
