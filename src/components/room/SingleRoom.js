import React, { Fragment, useContext, useState } from "react";
import { gql } from "graphql-tag";
import { Query } from "react-apollo";
import {Link} from 'react-router-dom'
import { Form, Grid, Button } from "semantic-ui-react";
import {AuthContext} from '../../context/auth'
import AddQuestion from './AddQuestion'
import DeleteQuestion from "./DeleteQuestion";

import RoomSolved from './RoomSolved'

function SingleRoom(props) {
  const roomId = props.match.params.roomId;
  const [values, setValues] = useState(new Map());
  

  const onchange = (e) => {
    const name = e.target.name;
    const hidden = e.target.value;
    setValues(values.set(name, hidden));
  };


  if(localStorage.getItem(roomId)>0){
  }
  else{
  localStorage.setItem(roomId, 0);
  }
  
  const onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.id;
    
    if (values.get(name) === e.target.name) {
      document.getElementById('btn'+name).innerHTML="Correct Answer"
      document.getElementById('btn'+name).style.backgroundColor = 'green';
    if(localStorage.getItem(name)!=1){
      localStorage.setItem(name, 1);
      var a ={}
      a.number=1
      var points = parseInt(localStorage.getItem(roomId))
      a.number = points+1
      localStorage.setItem(roomId, a.number)
    }
    } else {
      //todo pop up asnwer was wrong
      var a ={}
      a.number=0
      var points = parseInt(localStorage.getItem(roomId))
      if(points>0 && localStorage.getItem(name)==1){
      a.number = points-1
      localStorage.setItem(roomId, a.number);
      }
      localStorage.setItem(name, 0);
      document.getElementById('btn'+name).innerHTML="Wrong Answer"
      document. getElementById('btn'+name). style. backgroundColor = 'red' 
    }
   
  };
  const {user} = useContext(AuthContext)
  return (
    <Grid.Row columns={3}>
      <Grid.Row>
        <Query query={FETCH_ROOM_QUERY} variables={{ roomId }}>
          {({ loading, error, data }) => {
            if (loading) return <h1>Loading</h1>;
            if (error) console.log(error);
            if (data) {
              var getRoom = data.getRoom;
              
            }
            return (
              <Fragment >
                <div class="container ui">
                <Button as={Link}  to={`/rooms/${roomId}/board`} size="small" variant="contained" color="primary" >ScoreBoard</Button>
                  {user.username=='Alpha_2018' && <AddQuestion roomId={getRoom.id} />}
                  <br></br>
                  <br></br>
                  {(localStorage.getItem(roomId)==getRoom.questions.length) && <RoomSolved  room={getRoom}/>}
                {getRoom.users.map((users)=>{
                  if(user.username===users.username){
                      return <RoomSolved  room={getRoom}/>

                  }
                })}
                {getRoom.questions.map((room) => (
                  <Grid.Column   key={room.id}>
                    <span><strong><h3>{room.name}  </h3> </strong></span>
                    <span>{room.description}</span>
                    <Form id={room.id} name={room.answer} onSubmit={onsubmit}>
                      <Form.Field>
                        <Form.Input
                          class="ui form success"
                          placeholder="<cmrcet>Flag</cmrcet>"
                          name={room.id}
                          onChange={onchange}
                        />
                        <Button
                          type="submit"
                          color="teal"
                          id={room.id}
                        >
                          submit
                        </Button>
                        
                        <Button disabled id={'btn'+room.id} color={(localStorage.getItem(room.id)==1 && 'green') || (localStorage.getItem(room.id)==0 && 'red')} >{(localStorage.getItem(room.id)==1 && 'Correct answer') || (localStorage.getItem(room.id)==0 && 'Wrong answer') || ('Status')}</Button>
                      {user && user.username==='Alpha_2018' && <DeleteQuestion questionId={room.id} roomId={getRoom.id} />}
                      
                      </Form.Field>
                    </Form>
                    <br></br>
                    <hr ></hr>
                    <br></br>
                  </Grid.Column>
                ))
                
                }
                </div>
              </Fragment>
            );
          }}
        </Query>
      </Grid.Row>
    </Grid.Row>
  );
}

const FETCH_ROOM_QUERY = gql`
  query getRoom($roomId: ID!) {
    getRoom(roomId: $roomId) {
      id
      name
      createdAt
      questions {
        id
        name
        description
        answer
      }
      users{
        username
      }
    }
  }
`;
export default SingleRoom;