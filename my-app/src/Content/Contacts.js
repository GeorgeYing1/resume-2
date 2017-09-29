import React from 'react';
import SocialMedia from './SocialMedia.jsx'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const Gender = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const Relationship =[
  { key: '1', text: 'Colleague', value: 'colleague' },
  { key: '2', text: 'ClassMate', value: 'classMate' },
  { key: '3', text: 'Family', value: 'family' },
  { key: '4', text: 'Other', value: 'other' }
]

class Contacts extends React.Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='First name' placeholder='First name' />
          <Form.Field control={Input} label='Last name' placeholder='Last name' />
          <Form.Field control={Select} label='Gender' options={Gender} placeholder='Gender' />
          <Form.Field control={Select} label='Relationship' options={Relationship} placeholder='' />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field control={Radio} label='One' value='1' checked={value === '1'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Two' value='2' checked={value === '2'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Three' value='3' checked={value === '3'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
        <Form.Field control={Checkbox} label='Post this on this website?' />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      <SocialMedia/>
    </div>
    )
  }
}

export default Contacts;
