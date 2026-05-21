const courseTitle = "React Fundamentals";

function App() {
  const studentName = "Louay";

  const student = {
    name: "Louay",
    age: 20,
    track: "IT"
  };

  function sayHello() {
    return `Hello ${studentName}, welcome back!`;
  }

  return (
    <div>
      <h1>Welcome to My React Journey</h1>

      <p>Student Name: {studentName}</p>

      <p>Course: {courseTitle}</p>

      <p>
        Welcome to {courseTitle}, {studentName}!
      </p>

      <div>
        <label htmlFor="studentInput">Student Name:</label>
        <input type="text" id="studentInput" />
      </div>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>
    </div>
  );
}

export default App;
