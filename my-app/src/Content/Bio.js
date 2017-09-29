import React from 'react';
// import Control from '../Control/Control.js'
import { Container, Label, Header, List, Menu, Table, Icon } from 'semantic-ui-react'
var updateLog= {};
class Bio extends React.Component {

  // handleItemClick = (e) => <Control >;
  render() {
    // To do, clean up the celled table and generate it from json/icon
    // let historyTable=[{}];
    // let tableBody=<Table.Body></Table.Body>;
    //
    // for (var i = 0; i < historyTable.length; i++) {
    //   tableBody.push(<Table.Row>)
    //     for (var j=0; ){}
    //
    //
    //     </Table.Row>
    //   )
    // };



    return (
      <div>
        <h3>This site serves both as a E-version of CV and a self-practice of bulding a pure front-end website</h3>
        <h3>TimeLine</h3>
        {/* Todo: generate table with Json */}
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={3}>Time Point</Table.HeaderCell>
              <Table.HeaderCell width={4}>Status</Table.HeaderCell>
              <Table.HeaderCell width={5}>Notes</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

        <Table.Body>
           <Table.Row>
             <Table.Cell>
               <Label ribbon> Latest</Label>
             </Table.Cell>
             <Table.Cell> Adding content to content</Table.Cell>
             <Table.Cell> Not involving modal/javascript link yet</Table.Cell>
           </Table.Row>
           <Table.Row>
             <Table.Cell>Sept 1 2017</Table.Cell>
             <Table.Cell>First Deployment on heroku</Table.Cell>
             <Table.Cell>Used react Start-up project and Semantic UI to hit the ground and running</Table.Cell>
           </Table.Row>
           <Table.Row>
             <Table.Cell>July 2017</Table.Cell>
             <Table.Cell>Start the idea and early-state researching</Table.Cell>
             <Table.Cell>Based on previous project experience, this should be doable</Table.Cell>
           </Table.Row>
         </Table.Body>
         <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='left chevron' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='right chevron' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>


        {/* {tableBody} */}

        <List style={{fontSize: '16px'}}>
          <List.Item width={8}>
            <List.Icon name='user'/>
            <List.Content>
              <List.Header style={{textAlign: 'left'}}> George knows everything a bit and loves to embracing new ideas</List.Header>
              <List.Description>He is currently doing a software programmer job so he creates this website as a playground</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='home'/>
            <List.Content>
              <List.Header>George borned and raised in Nanjing, China and has been in U.S since 2009</List.Header>
              <List.Description>He loves his hometown Nanjing and so does Atlanta</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='graduation'/>
            <List.Content>
              <List.Header>George currently holds a master degree from Georgia Tech in chemical engineering</List.Header>
              <List.Description>Details can be found in Education Section</List.Description>
            </List.Content>
          </List.Item>
          {/* onClick={this.handleItemClick.bind(this,'Education')} */}
          {/* <List.Item>
            <List.Icon name='user'/>
            <List.Content>
              <List.Header>George knows everything a bit and loves to embracing new ideas</List.Header>
              <List.Description>He is currently doing a software programmer job so he creates this website as a playground</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='user'/>
            <List.Content>
              <List.Header>George knows everything a bit and loves to embracing new ideas</List.Header>
              <List.Description>He is currently doing a software programmer job so he creates this website as a playground</List.Description>
            </List.Content>
          </List.Item> */}
        </List>
      </div>
    )
  }
}
export default Bio;
