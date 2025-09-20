import React from 'react';

const sampleCatalogue = [
  {
    id: 1,
    title: 'Mathematics - Class 8',
    price: 'INR 15',
    image: 'https://m.media-amazon.com/images/I/81WcnNQ-TBL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 2,
    title: 'Stories for Children - Volume 1',
    price: 'INR 10',
    image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 3,
    title: 'Science Explorer - Class 9',
    price: 'INR 20',
    image: 'https://m.media-amazon.com/images/I/81vpsIs58WL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 4,
    title: 'English Grammar - Class 7',
    price: 'INR 12',
    image: 'https://m.media-amazon.com/images/I/91OINeHnJGL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 5,
    title: 'History of India - Class 10',
    price: 'INR 18',
    image: 'https://m.media-amazon.com/images/I/81drfTT9ZfL._AC_UY327_FMwebp_QL65_.jpg',
  },
  {
    id: 6,
    title: 'Coloring Book for Kids',
    price: 'INR 10',
    image: 'https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg',
  },
];

export default function RequestBooks() {
  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">Catalogue</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {sampleCatalogue.map((b) => (
            <div
              key={b.id}
              className="card border rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
            >
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h4 className="font-semibold text-lg">{b.title}</h4>
              <p className="text-sm text-gray-700">{b.price}</p>
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Request Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
