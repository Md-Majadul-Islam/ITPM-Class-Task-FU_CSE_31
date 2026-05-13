const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

const studentData = {
    id: "232031018",
    name: "Md Majadul Islam",
    department: "Computer Science & Engineering",
    university: "Feni University",
    currentSemester: "3rd Semester",
    programmingLanguages: ["JavaScript", "C", "Python"],
    interests: ["Backend Development", "Database", "Web Development"]
};
app.get("/", (req, res) => {
    res.status(200).send("Majadul Student Management API is Active");
});
app.get("/student/info", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Student information fetched successfully",
        data: studentData
    });
});
app.get("/student/skills", (req, res) => {
    res.json({
        student: studentData.name,
        skills: studentData.programmingLanguages
    });
});
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        serverTime: new Date().toLocaleString(),
        runningPort: PORT
    });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
