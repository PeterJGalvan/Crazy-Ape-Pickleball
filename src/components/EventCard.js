import Card from "react-bootstrap/Card";

function EventCard() {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Card>
        <Card.Header>Event Name</Card.Header>
        <Card.Body>
          <Card.Title>Date</Card.Title>
          <Card.Text>Description</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventCard;
