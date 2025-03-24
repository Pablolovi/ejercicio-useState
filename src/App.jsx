import React, { useState } from 'react';
import './App.css';

function App() {
  // Cambiar de un solo 'name' a una lista de 'teachers'
  const [teachers, setTeachers] = useState(["Data", "Reyes", "Yolanda"]);
  const [newName, setNewName] = useState('');

  // Función para cambiar el nombre del profesor (al hacer clic)
  const handleTeacherClick = (teacher) => {
    setNewName(teacher);
  };

  // Función para agregar un nuevo nombre
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newName.trim() === "") {
      alert("El nombre no puede estar vacío.");
      return;
    }

    if (teachers.includes(newName)) {
      alert("Este nombre ya está en la lista.");
      return;
    }

    // Agregar el nuevo nombre a la lista
    setTeachers((prevTeachers) => [...prevTeachers, newName]);
    setNewName(''); // Restablecer el campo de texto
  };

  // Función para eliminar un nombre de la lista
  const handleDelete = (nameToDelete) => {
    setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher !== nameToDelete));
  };

  return (
    <div className="container">
      <h2>Teacher Name: {newName || "Sofía"}</h2>
      <ul className="teacher-list">
        {teachers.map((teacher) => (
          <li key={teacher} className="teacher-item" onClick={() => handleTeacherClick(teacher)}>
            {teacher} 
            <button onClick={() => handleDelete(teacher)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="name-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button className="submit-button" type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;