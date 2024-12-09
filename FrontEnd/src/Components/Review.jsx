import React from 'react';

const ReviewDisplay = ({ reviews }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center font-bold font-roboto mb-6 text-green-700">Customer Reviews</h2>
      <span><hr /><hr /><hr /></span>
      <div className="mt-5 space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-95">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {/* Render star ratings */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="none"
                  >
                    <path
                      d="M12 .587l3.668 7.572 8.332 1.195-6.001 5.922 1.424 8.314-7.423-3.899-7.423 3.899 1.424-8.314-6.001-5.922 8.332-1.195L12 .587z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500">{review.name}</p>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewDisplay;
