export default function WomenCategories() {
  const categories = [
    { name: "Unstitched", image: "unstitched.jpg" },
    { name: "Stitched", image: "stitched.jpg" },
    { name: "1PC Unstitched", image: "1pc_unstitched.jpg" },
    { name: "2PC Unstitched", image: "2pc_unstitched.jpg" },
    { name: "3PC Unstitched", image: "3pc_unstitched.jpg" },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="p-6 bg-gray-100 shadow-md text-center text-2xl font-bold">
        Women's Collection
      </header>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="w-full h-80 object-cover rounded-lg transform transition duration-300 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            >
              <span className="text-white text-lg font-semibold">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
