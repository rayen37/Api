import { Button, Card } from "react-bootstrap";
import React from 'react'

function UserCard({user}) {
  return (
    <div> 
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title><h1>{user.name}</h1></Card.Title>
    <Card.Text>
           <h3> {user.email} </h3>
    </Card.Text>
    <br></br>
    <Button variant="primary">More details</Button>
  </Card.Body>
</Card>
  </div>
  )
}

export default UserCard
