const events = [
  {
    date: "15th March 2025",
    title: "Annual Tech Fest",
    description: "A two-day celebration of innovation, workshops, coding competitions, and exhibitions by students and startups.",
  },
  {
    date: "10th January 2025",
    title: "Cultural Carnival",
    description: "Dance, drama, and musical performances showcasing the vibrant spirit of our student community.",
  },
  {
    date: "5th September 2024",
    title: "Teachers' Day Celebration",
    description: "Tribute to our faculty with skits, games, and honor ceremonies organized by students.",
  },
];

const EventsPage = () => {
  return (
    <div className="py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-primary mb-12">Campus Events</h1>
      <div className="space-y-10 max-w-3xl w-full">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl shadow-md p-6 border-b-4 border-primary hover:scale-105 transition-transform"
          >
            <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
            <h2 className="text-2xl font-bold text-primary mb-2">{event.title}</h2>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
