import React from "react";

function EventTimeline() {
  const events = [
    {
      title: "Event 1",
      date: "January 1, 2023",
      description: "Description for event 1",
    },
    {
      title: "Event 2",
      date: "February 1, 2023",
      description: "Description for event 2",
    },
    {
      title: "Event 3",
      date: "March 1, 2023",
      description: "Description for event 3",
    },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      {events.map((event, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row md:items-center py-4 ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
        >
          <div className="md:w-1/3 md:text-right pr-4">
            <span className="block md:inline-block text-gray-600 font-medium">
              {event.date}
            </span>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-lg font-bold">{event.title}</h2>
            <p className="mt-2 text-gray-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EventTimeline