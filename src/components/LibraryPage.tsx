const LibraryPage = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-4xl font-bold mb-4">Our Library</h1>
          <p className="text-lg">
            Equipped with thousands of books, digital resources, and peaceful reading zones, our library is a hub for academic exploration and growth. Students have access to journals, e-books, and computer terminals for research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;