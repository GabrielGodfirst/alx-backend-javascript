// Define the Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // Optional attribute
  location: string;
  [key: string]: any;  // Allows any additional attributes
}

// initializing a teacher
const teacher3: Teacher = {
  firstName: 'Jude',
  lastName: 'Joe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,  // Additional attribute
};

console.log(teacher3);
