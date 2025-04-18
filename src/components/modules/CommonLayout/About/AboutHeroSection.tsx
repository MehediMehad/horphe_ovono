const AboutHeroSection = () => {
  return (
    <section className="bg-[#0C0C0C] text-white py-16 md:py-24 mt-[75px]">
      <div className="max-w-[1200px] px-4 lg:px-0 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About HELPER</h1>
          <p className=" text-gray-300 mb-8">
          HELPER is a platform that connects people in need of assistance with those who can offer help. Whether you're looking for a quick task to be completed or you're ready to lend a hand, HELPER makes it easy to find and offer support in your community.
          </p>
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-white rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
