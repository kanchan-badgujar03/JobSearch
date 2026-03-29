const container = document.getElementById("jobs-container");

function displayJobs(jobList) {
    container.innerHTML = "";

    jobList.forEach(job => {
        const jobDiv = document.createElement("div");
        jobDiv.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
        `;
        container.appendChild(jobDiv);
    });
}

displayJobs(jobs);

document.getElementById("search").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(value)
    );
    displayJobs(filtered);
});
