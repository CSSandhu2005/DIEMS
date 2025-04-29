const departments = [
  {
    title: "Mechanical Engineering Department",
    points: [
      "The Mechanical Engineering Department focuses on developing engineers with deep knowledge in mechanical systems, thermodynamics, material science, and manufacturing processes.",
      "State-of-the-art laboratories equipped with advanced tools and machinery for hands-on experience.",
      "The department organizes workshops, seminars, and guest lectures from industry leaders to bridge the gap between theory and practice.",
      "Research areas include robotics, fluid mechanics, thermal engineering, and sustainable energy solutions.",
      "Active collaborations with leading industries and research institutions for joint projects and internships."
    ]
  },
  {
    title: "Electronics & Telecommunication Department",
    points: [
      "The E&TC Department offers a comprehensive curriculum that blends electronics, communication systems, and signal processing with cutting-edge technology.",
      "The department is equipped with modern labs for practical exposure to microelectronics, VLSI, communication protocols, and embedded systems.",
      "Students are encouraged to engage in research and development, contributing to advancements in fields such as IoT, wireless communication, and embedded systems.",
      "The department also focuses on preparing students for industry demands by facilitating internships and industry-sponsored projects.",
      "Faculty members are actively involved in research and contribute to publications in reputed journals and conferences."
    ]
  },
  {
    title: "Civil Engineering Department",
    points: [
      "The Civil Engineering Department focuses on infrastructure development, construction materials, geotechnical engineering, and environmental sustainability.",
      "Equipped with advanced labs that support practical learning in areas like structural analysis, surveying, and construction management.",
      "The department is known for its focus on sustainable construction techniques, disaster management, and smart city planning.",
      "Students participate in real-world projects that simulate industry scenarios and collaborate with companies in the civil engineering sector.",
      "Research is focused on the use of green materials, renewable energy solutions in construction, and modern building technologies."
    ]
  },
  {
    title: "Computer Science & Engineering Department",
    points: [
      "The CSE Department is at the forefront of preparing students for careers in software development, data science, AI, and cybersecurity.",
      "The department provides extensive lab facilities for students to work on projects related to algorithms, machine learning, artificial intelligence, and software engineering.",
      "Emphasis is placed on preparing students with a solid understanding of both theoretical concepts and practical skills through coding challenges, hackathons, and internships.",
      "Research is focused on cloud computing, AI & ML, big data analytics, and cybersecurity, with active industry collaborations.",
      "The department regularly invites guest speakers from top tech companies to provide insights into emerging trends and job market demands."
    ]
  },
  {
    title: "MBA Department",
    points: [
      "The MBA Department aims to cultivate business leaders equipped with the skills and knowledge to navigate the global business environment.",
      "Courses are designed to enhance students' managerial, strategic, and analytical skills while fostering an entrepreneurial mindset.",
      "The department regularly partners with leading companies for internships, live projects, and industry visits to give students a real-world perspective.",
      "Research focuses on areas like organizational behavior, strategic management, financial analysis, and marketing trends.",
      "The department organizes leadership development programs, workshops, and networking events to prepare students for leadership roles in business."
    ]
  }
];

const DepartmentCard = ({ title, points }: { title: string; points: string[] }) => (
  <div className="bg-card rounded-2xl shadow-lg p-6 space-y-4 max-w-xl w-full">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const DepartmentsPage = () => {
  return (
    <div className="py-10 px-5 flex flex-col items-center space-y-8">
      <h1 className="text-3xl font-bold text-center text-white">Our Departments</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((department, index) => (
          <DepartmentCard key={index} title={department.title} points={department.points} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentsPage;
