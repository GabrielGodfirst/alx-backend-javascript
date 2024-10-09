// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // Optional attribute
  location: string;
  [key: string]: any;  // Allows any additional attributes
}

// initializing a teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // Additional attribute
};

console.log(teacher3);
