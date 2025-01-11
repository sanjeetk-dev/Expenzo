const SuccessStories = () => {
  const successData = [
    {
      img: 'https://res.cloudinary.com/dgxiy7wlw/image/upload/v1728283821/samples/people/bicycle.jpg',
      title: 'Rebuilding Lives After Disaster',
      desc: 'With your help, this community has rebuilt homes and lives after a devastating natural disaster.',
    },
    {
      img: 'https://res.cloudinary.com/dgxiy7wlw/image/upload/v1728283821/samples/people/bicycle.jpg',
      title: 'Building a School for the Future',
      desc: 'Thanks to generous donors, a new school has been built in an underprivileged area, giving children hope for a brighter future.',
    },
    {
      img: 'https://res.cloudinary.com/dgxiy7wlw/image/upload/v1728283821/samples/people/bicycle.jpg',
      title: 'Providing Healthcare to Remote Areas',
      desc: 'Your donations have helped deliver critical healthcare services to isolated communities.',
    },
  ];

  return (
    <div className="py-10 px-4 lg:px-20">
      {/* Success Stories Section */}
      <h2 className="text-4xl font-bold text-black text-center mb-8">
        Success Stories
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {successData.map(({ img, title, desc }, i) => (
          <div
            key={i}
            className="bg-gray-200 shadow-lg p-4 rounded-lg hover:shadow-xl transition w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)]"
          >
            <div className="h-64 w-full overflow-hidden rounded-lg">
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mt-4">{title}</h3>
            <p className="text-gray-300 text-black mt-2">{desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <h2 className="text-4xl font-bold text-black text-center mb-8">
        What People Are Saying
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)]"
          >
            <div className="text-teal-400 text-3xl mb-4">“</div>
            <p className="text-gray-300 mb-6 text-black">
              {i === 0
                ? "Donating to this campaign changed my life. I feel like I've made a real difference in someone’s life."
                : i === 1
                ? "Seeing how my small contribution built an entire school gives me so much pride."
                : "I never knew that a small donation could bring healthcare to people in need. I'm truly humbled."}
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="w-12 h-12 rounded-full bg-gray-600 mr-4"></div>
              <div>
                <h4 className="font-semibold text-black">
                  {i === 0 ? 'Jane Doe' : i === 1 ? 'John Smith' : 'Emily Johnson'}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
