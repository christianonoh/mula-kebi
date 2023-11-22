
const Marquee = () => {
  const insights = [
    "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
    "20K+ Subscribers",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
  ];

  return (
    <div className="relative flex py-4 overflow-hidden bg-accent text-light">
      <div className="animate-marquee whitespace-nowrap">
        {insights.map((insight) => (
          <span className="px-4 border-r" key={insight}>
            {insight}
          </span>
        ))}
      </div>
      <div className="absolute top-4 animate-marquee2 whitespace-nowrap">
        {insights.map((insight) => (
          <span className="px-4 border-r" key={insight}>
            {insight}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
