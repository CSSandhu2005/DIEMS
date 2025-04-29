const culturalActivities = [
  {
    date: "Annual Cultural Festival",
    description: [
      "A grand celebration of creativity and talent, featuring events across music, dance, drama, and art.",
      "Performances from renowned artists, cultural exhibitions, and student-led productions.",
      "Key events include Talent Show, Dance-Off, and Live Music Concerts."
    ]
  },
  {
    date: "Cultural Clubs and Societies",
    description: [
      "A variety of clubs for theatre, music, dance, literature, and more.",
      "Theatre Club organizes plays, improv nights, and readings for students to showcase their acting talents.",
      "Music & Dance Societies: Regular practice sessions, workshops, and performances.",
      "Literary Society: A forum for writers and poets to meet and share their creativity."
    ]
  },
  {
    date: "Workshops & Learning",
    description: [
      "Regular workshops with professional artists and performers.",
      "Students can explore skills like painting, photography, singing, and more.",
      "Guest speakers and leaders in cultural fields provide valuable insights."
    ]
  }
];

const TimelineEvent = ({ date, description }: { date: string; description: string[] }) => (
  <div className="mb-10 flex justify-between items-start">
    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
      <span className="text-xl font-bold">{date.slice(0, 1)}</span>
    </div>
    <div className="ml-4 flex-1 border-l-2 border-primary pl-4">
      <h3 className="text-xl font-semibold text-white">{date}</h3>
      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

const CulturalPage = () => {
  return (
    <div className="py-10 px-5 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Cultural Activities Timeline</h1>
        <div className="relative border-l-4 border-primary pl-10">
          {culturalActivities.map((activity, index) => (
            <TimelineEvent key={index} date={activity.date} description={activity.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalPage;
