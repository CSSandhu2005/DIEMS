const features = [
    "State-of-the-art computer labs with 24/7 access",
    "Mechanical workshops with industry-grade tools",
    "Civil labs for surveying and construction practice",
    "Advanced electronics and communication labs",
    "AI/ML labs with high-performance GPUs"
  ];
  
  const LabsAndEquipmentPage = () => {
    return (
      <div className=" py-12 px-6">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Labs & Equipment</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl shadow-md text-lg text-muted-foreground">
              • {feature}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LabsAndEquipmentPage;
  