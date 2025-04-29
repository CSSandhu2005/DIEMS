// Sample Faculty data
const facultyMembers = [
  {
    name: "Dr. John Doe",
    title: "Professor",
    department: "Computer Science and Engineering",
    specialization: "Artificial Intelligence, Machine Learning"
  },
  {
    name: "Dr. Jane Smith",
    title: "Associate Professor",
    department: "Mechanical Engineering",
    specialization: "Thermodynamics, Fluid Mechanics"
  },
  {
    name: "Dr. Emily Davis",
    title: "Assistant Professor",
    department: "Civil Engineering",
    specialization: "Structural Engineering"
  },
  {
    name: "Dr. Michael Brown",
    title: "Professor",
    department: "Electronics and Telecommunication Engineering",
    specialization: "Communication Systems, Signal Processing"
  },
  {
    name: "Dr. Sarah Lee",
    title: "Assistant Professor",
    department: "Electrical Engineering",
    specialization: "Power Systems, Control Systems"
  }
];

const FacultyCard = ({
  name,
  title,
  department,
}: {
  name: string;
  title: string;
  department: string;
  specialization: string;
}) => (
  <div className="bg-card p-6 rounded-2xl shadow-lg flex flex-col items-center space-y-4 max-w-sm w-full">
    <h2 className="text-xl font-semibold text-primary">{name}</h2>
    <p className="text-md font-medium text-white">{title}</p>
    <p className="text-sm text-muted-foreground">{department}</p>
  </div>
);

const FacultyPage = () => {
  return (
    <div className="py-10 px-5 flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Our Faculty</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facultyMembers.map((faculty, index) => (
            <FacultyCard
              key={index}
              name={faculty.name}
              title={faculty.title}
              department={faculty.department}
              specialization={faculty.specialization}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
