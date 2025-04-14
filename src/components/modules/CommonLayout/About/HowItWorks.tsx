const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
    <div className="max-w-[1200px] px-4 lg:px-0 mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          How HELPER Works
        </h2>
        <p className="text-gray-600">
          Our platform makes it easy to find help or offer assistance in
          your community. Here's how it works:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-xl font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Request Help</h3>
          <p className="text-gray-600">
            Describe your task, set your budget, and submit your request.
            Our platform will match you with available helpers in your area.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-xl font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Request Assistance</h3>
          <p className="text-gray-600">
          As a needer, request help for your tasks, or as a helper, accept requests and assist others. 
          You can switch roles anytime to both give and receive assistance.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-xl font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Connect</h3>
          <p className="text-gray-600">
            Review helper profiles, communicate through our secure messaging
            system, and choose the right person for your task.
          </p>
        </div>

      </div>
    </div>
  </section>
  );
};

export default HowItWorks;