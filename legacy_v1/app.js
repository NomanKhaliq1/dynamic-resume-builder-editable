// Helper function to format dates as "Month Year"
function formatDate(dateStr) {
    if (!dateStr)
        return "Present";
    const date = new Date(dateStr);
    const options = { month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
}
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b, _c, _d;
    const form = document.getElementById("resume-form");
    const resumeDisplay = document.getElementById("resume");
    // Logic for Form Page (index.html)
    if (form) {
        // Add and remove dynamic bullets (experience, education, and skills)
        function addBulletEvent(containerClass, bulletInputClass, addButtonClass, listClass) {
            document.addEventListener("click", (e) => {
                var _a;
                const target = e.target;
                // Add Bullet Point
                if (target.classList.contains(addButtonClass)) {
                    const parent = target.closest(`.${containerClass}`);
                    const input = parent.querySelector(`.${bulletInputClass}`);
                    const ul = parent.querySelector(`.${listClass}`);
                    if (input.value.trim()) {
                        const li = document.createElement("li");
                        li.innerHTML = `${input.value.trim()} <button type="button" class="remove-bullet">X</button>`;
                        ul.appendChild(li);
                        input.value = "";
                    }
                }
                // Remove Bullet Point
                if (target.classList.contains("remove-bullet")) {
                    (_a = target.closest("li")) === null || _a === void 0 ? void 0 : _a.remove();
                }
            });
        }
        addBulletEvent("experience-item", "experience-detail-input", "add-experience-bullet", "experience-details");
        addBulletEvent("education-item", "education-detail-input", "add-education-bullet", "education-details");
        addBulletEvent("skills-item", "skill-input", "add-skill-bullet", "skills-list");
        // Add new Experience Section
        (_a = document.getElementById("add-experience")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            const container = document.getElementById("experience-container");
            const experienceItem = document.createElement("div");
            experienceItem.classList.add("experience-item");
            experienceItem.innerHTML = `
                <label>Role:</label>
                <input type="text" class="experience-role" required>
                <label>Start Date:</label>
                <input type="date" class="experience-start" required>
                <label>End Date:</label>
                <input type="date" class="experience-end">
                <label>Add Bullet Point:</label>
                <input type="text" class="experience-detail-input" placeholder="Add detail">
                <button type="button" class="add-experience-bullet">Add</button>
                <ul class="experience-details"></ul>
                <button type="button" class="remove-section">Remove Experience</button>
            `;
            container.appendChild(experienceItem);
        });
        // Add new Education Section
        (_b = document.getElementById("add-education")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
            const container = document.getElementById("education-container");
            const educationItem = document.createElement("div");
            educationItem.classList.add("education-item");
            educationItem.innerHTML = `
                <label>Degree:</label>
                <input type="text" class="education-degree" required>
                <label>Institute:</label>
                <input type="text" class="education-institute" required>
                <label>Start Year:</label>
                <input type="date" class="education-start" required>
                <label>End Year:</label>
                <input type="date" class="education-end">
                <label>Add Bullet Point:</label>
                <input type="text" class="education-detail-input" placeholder="Add detail">
                <button type="button" class="add-education-bullet">Add</button>
                <ul class="education-details"></ul>
                <button type="button" class="remove-section">Remove Education</button>
            `;
            container.appendChild(educationItem);
        });
        // Add new Skill Section
        (_c = document.getElementById("add-skill")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
            const container = document.getElementById("skills-container");
            const skillItem = document.createElement("div");
            skillItem.classList.add("skills-item");
            skillItem.innerHTML = `
                <label>Skills Set:</label>
                <input type="text" class="skill-input" placeholder="Enter skills set" required>
                <button type="button" class="add-skill-bullet">Add</button>
                <ul class="skills-list"></ul>
            `;
            container.appendChild(skillItem);
        });
        // Remove Section Event
        document.addEventListener("click", (e) => {
            var _a;
            const target = e.target;
            if (target.classList.contains("remove-section")) {
                (_a = target.closest(".experience-item, .education-item, .skills-item")) === null || _a === void 0 ? void 0 : _a.remove();
            }
        });
        // Save form data to localStorage
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const title = document.getElementById("title").value;
            const contact = document.getElementById("contact").value;
            const objective = document.getElementById("objective").value;
            const experiences = [];
            document.querySelectorAll(".experience-item").forEach((item) => {
                const role = item.querySelector(".experience-role").value;
                const start = item.querySelector(".experience-start").value;
                const end = item.querySelector(".experience-end").value || "Present";
                const details = [];
                item.querySelectorAll(".experience-details li").forEach((li) => {
                    var _a;
                    details.push(((_a = li.textContent) === null || _a === void 0 ? void 0 : _a.replace("X", "").trim()) || "");
                });
                experiences.push({ role, start, end, details });
            });
            const education = [];
            document.querySelectorAll(".education-item").forEach((item) => {
                const degree = item.querySelector(".education-degree").value;
                const institute = item.querySelector(".education-institute").value;
                const start = item.querySelector(".education-start").value;
                const end = item.querySelector(".education-end").value;
                const details = [];
                item.querySelectorAll(".education-details li").forEach((li) => {
                    var _a;
                    details.push(((_a = li.textContent) === null || _a === void 0 ? void 0 : _a.replace("X", "").trim()) || "");
                });
                education.push({ degree, institute, start, end, details });
            });
            const skills = [];
            document.querySelectorAll(".skills-list li").forEach((li) => {
                var _a;
                skills.push(((_a = li.textContent) === null || _a === void 0 ? void 0 : _a.replace("X", "").trim()) || "");
            });
            const resumeData = { name, title, contact, objective, experiences, education, skills };
            localStorage.setItem("resumeData", JSON.stringify(resumeData));
            window.location.href = "resume.html";
        });
    }
    // Logic for Resume Display Page (resume.html)
    if (resumeDisplay) {
        // Load data into resume template
        const resumeData = localStorage.getItem("resumeData");
        if (resumeData) {
            const data = JSON.parse(resumeData);
            document.getElementById("name").textContent = data.name || "";
            document.getElementById("title").textContent = data.title || "";
            document.getElementById("contact").textContent = data.contact || "";
            document.getElementById("objective").textContent = data.objective || "";
            const experienceList = document.getElementById("experience-list");
            if (experienceList) {
                data.experiences.forEach((exp) => {
                    const startFormatted = formatDate(exp.start);
                    const endFormatted = exp.end === "Present" ? "Present" : formatDate(exp.end);
                    const div = document.createElement("div");
                    div.innerHTML = `
                        <div class="title-format">
                            <h4>${exp.role}</h4> 
                            <h4 class="fw-400">${startFormatted} - ${endFormatted}</h4>
                        </div>
                        <ul>
                            ${exp.details.map((detail) => `<li>${detail.trim()}</li>`).join("")}
                        </ul>
                    `;
                    experienceList.appendChild(div);
                });
            }
            const educationList = document.getElementById("education-list");
            if (educationList) {
                data.education.forEach((edu) => {
                    const startFormatted = formatDate(edu.start);
                    const endFormatted = formatDate(edu.end);
                    const div = document.createElement("div");
                    div.innerHTML = `
                        <div class="title-format">
                            <h4>${edu.degree}</h4> 
                            <h4 class="fw-400">${startFormatted} - ${endFormatted}</h4>
                        </div>
                        <ul>
                            ${edu.details.map((detail) => `<li>${detail.trim()}</li>`).join("")}
                        </ul>
                    `;
                    educationList.appendChild(div);
                });
            }
            const skillsList = document.getElementById("skills-list");
            if (skillsList) {
                data.skills.forEach((skill) => {
                    const li = document.createElement("li");
                    li.textContent = skill;
                    skillsList.appendChild(li);
                });
            }
        }
        // PDF Generation
        (_d = document.getElementById("download-btn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
            const resume = document.getElementById("resume");
            const opt = {
                margin: 0, // Uniform margins
                filename: "Resume.pdf",
                image: { type: "jpeg", quality: 1 }, // High-quality rendering
                html2canvas: {
                    scale: 1, // Keeps high resolution without overscaling
                    scrollY: 0, // Prevents scrolling issues
                    useCORS: true // Ensures external fonts and images are loaded
                },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
            };
            html2pdf()
                .set(opt)
                .from(resume)
                .save();
        });
    }
});
