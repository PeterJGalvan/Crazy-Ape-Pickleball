import EventCard from "./components/EventCard";
import NavBar from "./components/NavBar";
import HeaderImage from "./components/HeaderImage";

function Landing() {
  return (
    <div className="bg-dark">
      <NavBar />
      <HeaderImage />
      <div className="container" style={{ paddingTop: "10px" }}>
        <h1 className="text-white"> Upcoming Events </h1>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <div style={{ height: "1000vh" }}></div>
      </div>
    </div>
  );
}

export default Landing;
