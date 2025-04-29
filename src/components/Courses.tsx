const courses = [
  {
    title: "B.Tech Programs",
    points: [
      "Full-time, first-shift B.Tech programs with 4-year duration and a dedicated study plan.",
      "Courses offered:",
      "- Mechanical Engineering – 120 seats – DTE Code: 211461210",
      "- Electronics & Telecommunication – 120 seats – DTE Code: 211437010",
      "- Civil Engineering – 120 seats – DTE Code: 211419110",
      "- Computer Science & Engineering – 120 seats – DTE Code: 211491110",
      "- CSE (AI & ML) – 60 seats – DTE Code: 211424210",
      "All courses approved for 2024–25.",
      "Highly requested programs with strong industry relevance.",
      "Focused on career readiness and technical excellence."
    ]
  },
  {
    title: "M.Tech Programs",
    points: [
      "Full-time, first-shift M.Tech programs with 2-year duration and a dedicated study plan.",
      "Courses offered:",
      "- Mechanical Engineering – 24 seats – DTE Code: 211461210",
      "- Automotive Technology – 24 seats – DTE Code: 211463010",
      "- Electronics & Telecommunication – 18 seats – DTE Code: 211437210",
      "- Computer Science & Engineering – 24 seats – DTE Code: 211424210",
      "- Civil (Computer Aided Structural Engg.) – 24 seats – DTE Code: 2114",
      "- Structural Engineering – 24 seats – DTE Code: 211421210",
      "All programs approved for 2023–24.",
      "Highly requested courses designed for advanced industry needs.",
      "Focused postgraduate education aligned with latest trends."
    ]
  },
  {
    title: "MBA Program",
    points: [
      "Vision:",
      "To be recognized as the first choice for Management education by developing and implementing cohesive teaching-learning mechanism for equipping the students with managerial skills and transform them into versatile business leaders.",
      "Mission:",
      "To develop healthy environment for encouraging management education by inculcating Socio-Ethical values, Participatory teaching learning methodologies along with industry exposure.",
      "To prepare future managers by providing a sustainable platform to develop their knowledge, skill, and attitude.",
      "To impart Business education through Management practices which will meet the requirement of the industry."
    ]
  }
];

type CourseCardProps = {
    title: string;
    points: string[];
  };

const CourseCard: React.FC<CourseCardProps> = ({ title, points }) => (
  <div className="bg-card text-muted-foreground rounded-2xl shadow-lg p-6 space-y-4 max-w-xl w-full">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <ul className="list-disc pl-5 space-y-2">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const CoursesPage = () => {
  return (
    <div className="py-10 px-5 flex flex-col items-center space-y-8 mb-20">
      <h1 className="text-3xl font-bold text-center text-white">Our Programs</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} points={course.points} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
