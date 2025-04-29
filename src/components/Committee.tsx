const committees = [
  {
    title: "Anti-Ragging Committee",
    members: [
      "Dr. A. Sharma (Chairperson)",
      "Prof. B. Verma",
      "Ms. C. Rao",
      "Mr. D. Iyer",
    ],
  },
  {
    title: "Internal Complaints Committee",
    members: [
      "Dr. E. Kulkarni (Presiding Officer)",
      "Prof. F. Naik",
      "Ms. G. Patil",
    ],
  },
  {
    title: "Grievance Redressal Cell",
    members: [
      "Dr. H. Mehta (Head)",
      "Mr. I. Khan",
      "Ms. J. Das",
    ],
  },
];

const CommitteePage = () => {
  return (
    <div className="py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-primary mb-10">College Committees</h1>
      <div className="w-full max-w-3xl space-y-10">
        {committees.map((committee, index) => (
          <div
            key={index}
            className="bg-card shadow-xl rounded-xl p-6 border-l-8 border-primary"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">
              {committee.title}
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground">
              {committee.members.map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteePage;
