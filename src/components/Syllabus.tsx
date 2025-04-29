const syllabusAndCurriculum = [
  {
    title: "B.Tech Syllabus & Curriculum",
    points: [
      "The B.Tech programs are designed to provide comprehensive knowledge in core engineering fields, coupled with practical skills.",
      "Each program is structured into 8 semesters, covering foundational courses in the first 2 years and specialized subjects in the remaining years.",
      "Emphasis on both theoretical learning and hands-on experience through lab sessions, projects, and internships.",
      "Students are encouraged to pursue interdisciplinary subjects and research projects based on industry trends and innovations.",
      "Regular updates to the syllabus to incorporate the latest developments in technology and research."
    ]
  },
  {
    title: "M.Tech Syllabus & Curriculum",
    points: [
      "The M.Tech programs offer advanced learning in specialized engineering disciplines.",
      "Students will dive deeper into subjects related to their chosen field, focusing on both theoretical and practical aspects.",
      "Research-driven curriculum, with options for industry projects, thesis work, and exposure to cutting-edge technologies.",
      "Curriculum emphasizes innovation, problem-solving, and development of analytical skills critical for a successful career in academia or industry.",
      "Frequent syllabus revisions ensure that students are equipped with the latest knowledge in their areas of expertise."
    ]
  },
  {
    title: "MBA Syllabus & Curriculum",
    points: [
      "The MBA program is designed to develop a comprehensive understanding of business management, strategy, and leadership.",
      "Curriculum includes core management subjects, elective courses, and a focus on practical applications of business principles.",
      "Real-world case studies, internships, and industry collaborations form an integral part of the learning process.",
      "Students are exposed to a variety of business domains, including finance, marketing, operations, and human resources.",
      "Continuous curriculum updates ensure alignment with evolving market needs and industry requirements."
    ]
  }
];

const SyllabusCard = ({ title, points }: { title: string; points: string[] }) => (
  <div className="bg-card rounded-2xl shadow-lg p-6 space-y-4 max-w-xl w-full">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const SyllabusPage = () => {
  return (
    <div className="py-10 px-5 flex flex-col items-center space-y-8">
      <h1 className="text-3xl font-bold text-center text-white">Program Syllabus & Curriculum</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {syllabusAndCurriculum.map((item, index) => (
          <SyllabusCard key={index} title={item.title} points={item.points} />
        ))}
      </div>
    </div>
  );
};

export default SyllabusPage;
