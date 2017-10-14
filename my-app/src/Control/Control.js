import React, { Component } from 'react'
import { Grid, Menu} from 'semantic-ui-react'
import Content from '../Content/Content.js'

export default class Control extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  constructionClick= () => {this.setState({ activeItem: 'Bio'})}
  render() {
    const { activeItem } = this.state

    return (
    <div>
      <Grid>
        <Grid.Column width={4} style={{fontSize: '30px'}}>
          <Menu fluid vertical tabular='right'>
            <Menu.Item name='Bio' active={activeItem === 'Bio'} onClick={this.handleItemClick} />
            <Menu.Item name='Education' active={activeItem === 'Education'} onClick={this.handleItemClick} />
            <Menu.Item name='Work' active={activeItem === 'Work'} onClick={this.handleItemClick} />
            <Menu.Item name='Skills' active={activeItem === 'Skills'} onClick={this.handleItemClick} />
            <Menu.Item name='Hobbies' active={activeItem === 'Hobbies'} onClick={this.handleItemClick} />
            <Menu.Item name='Voluntaries' active={activeItem === 'Voluntaries'} onClick={this.handleItemClick} />
            <Menu.Item name='Contacts' active={activeItem === 'Contacts'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Content subjectTopic={this.state.activeItem} constructionClick={this.constructionClick}/>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}
