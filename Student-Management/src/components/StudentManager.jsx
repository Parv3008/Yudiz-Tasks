import React from "react";
import { useState } from "react";
import "../styles/StudentManager.scss";

const StudentManager = () => {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const fetchRandomStudent = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const name = data.results[0].name.first + " " + data.results[0].name.last;
    const id = data.results[0].login.uuid;
    const age = data.results[0].dob.age;
    setStudentName(name);
    setStudentID(id);
    setStudentAge(age.toString());
  };

  const handleSubmit = () => {
    if (studentName === "" || studentID === "" || studentAge === "") {
      alert("Please fill all the fields");
      return;
    }

    const newStudent = { name: studentName, id: studentID, age: studentAge };

    if (editIndex === null) {
      setStudents([...students, newStudent]);
    } else {
      const updatedList = [...students];
      updatedList[editIndex] = newStudent;
      setStudents(updatedList);
      setEditIndex(null);
    }

    setStudentName("");
    setStudentID("");
    setStudentAge("");
  };

  const handleEdit = (index) => {
    const selected = students[index];
    setStudentName(selected.name);
    setStudentID(selected.id);
    setStudentAge(selected.age);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = [...students];
    updatedList.splice(index, 1);
    setStudents(updatedList);
    setStudentName("");
    setStudentID("");
    setStudentAge("");
    setEditIndex(null);
  };

  return (
    <div className="student-manager">
      <h1>Student Management System</h1>
      <div className="inputs ">
        <div>
          <label For="name">Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>

        <div>
          <label For="id">ID</label>
          <input
            type="text"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            placeholder="Enter your ID"
          />
        </div>

        <div>
          <label For="age">Age</label>
          <input
            type="text"
            value={studentAge}
            onChange={(e) => setStudentAge(e.target.value)}
            placeholder="Enter your Age"
          />
        </div>

        <div>
          <button className="add" onClick={handleSubmit}>
            {editIndex === null ? "Add Student" : "Update Student"}
          </button>
        </div>
        <div>
          <button className="random" onClick={fetchRandomStudent}>
            Auto Fill Random
          </button>
        </div>
      </div>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <h3>Name: {student.name}</h3>
            <p>ID: {student.id}</p>
            <p>Age: {student.age}</p>
            <button className="edit" onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button className="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentManager;
