const HostelPage = () => {
    const timeline = [
      {
        title: "Separate Hostels",
        desc: "Separate, secured hostels for boys and girls with 24/7 monitoring."
      },
      {
        title: "Spacious Rooms",
        desc: "Rooms are well-ventilated with attached bathrooms and storage."
      },
      {
        title: "Mess Facility",
        desc: "Nutritious vegetarian meals served hygienically."
      },
      {
        title: "Recreational Areas",
        desc: "Common rooms with TV, games, and reading space."
      }
    ];
  
    return (
      <div className=" py-12 px-6">
        <h1 className="text-3xl font-bold text-center text-white mb-10">Our Hostel Facilities</h1>
        <div className="relative border-l-4 border-primary pl-6 max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <div key={idx} className="mb-10">
              <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
              <p className="text-muted-foreground mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HostelPage;