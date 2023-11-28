import CountUp from "react-countup";
import { FaBook, FaTruck, FaUsers } from "react-icons/fa6";

const States = () => {
  const states = [
    {
      title: "Total Bookings",
      value: 121,
      icon: <FaBook className="text-5xl text-my-primary me-2" />,
    },
    {
      title: "Parcel Delivered",
      value: 93,
      icon: <FaTruck className="text-5xl text-my-primary me-2" />,
    },
    {
      title: "Happy Customers",
      value: 43,
      icon: <FaUsers className="text-5xl text-my-primary me-2" />,
    },
  ];
  return (
    <section className="py-12" data-aos="fade-up">
      <div className="stats w-full py-6 border-y border-gray-200 rounded-none">
        {states.map(({ title, icon, value }) => (
          <div
            key={title}
            className="flex items-center justify-center text-center py-4">
            <div>{icon}</div>
            <div>
              <div className="mb-6 text-lg text-gray-500 font-medium">
                {title}
              </div>
              <div className="text-5xl font-extrabold">
                <CountUp enableScrollSpy end={value} duration={2} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default States;
