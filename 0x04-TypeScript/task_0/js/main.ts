// Define the interface for Student
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students based on the interface
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table with students' first name and location
function renderTable(students: Student[]): void {
  // Create the table element
  const table = document.createElement('table');
  
  // For each student, create a new row and append it to the table
  students.forEach((student) => {
    const row = table.insertRow(); // Create a new row

    const firstNameCell = row.insertCell(); // Create a new cell for the first name
    const locationCell = row.insertCell();  // Create a new cell for the location

    firstNameCell.textContent = student.firstName; // Add first name to the cell
    locationCell.textContent = student.location;   // Add location to the cell
  });

  // Append the table to the body of the document
  document.body.appendChild(table);
}

// Call the renderTable function to display the students in the array
renderTable(studentsList);
