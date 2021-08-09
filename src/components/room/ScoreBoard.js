import React, { Fragment, useContext, useState } from "react";
import { gql } from "graphql-tag";
import { Query } from "react-apollo";
import {Link} from 'react-router-dom'
import { graphql } from "react-apollo";
import { Form, Grid, Button, Label } from "semantic-ui-react";
import './Score.css'

function ScoreBoard(props){
    const roomId = props.match.params.roomId;
    console.log(roomId)
    return(
        <Fragment >
        <Query query={FETCH_ROOM_QUERY} variables={{ roomId }}>
            {({ loading, error, data }) => {
            if (loading) return <h1>Loading</h1>;
            if (error) console.log(error);
            if (data) {
              var usernames = data.getRoom.users;
            }
            
            return(
               
                usernames.map((username)=>(
                    <table container>
                        <tr>
                    <td>{username.username}</td>
                    </tr>
                    </table>
                ))
                
            )
            
        }
        }
            </Query>
            </Fragment>
    )
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
export default ScoreBoard