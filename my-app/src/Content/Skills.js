import React from 'react';
import { Accordion, Icon} from 'semantic-ui-react'

class Skills extends React.Component {
  render() {
    // let chemical_engineering = [{
    //   key: 'chemical_engineering',
    //   title: <Label color='red' content="titlehi" />,
    //   content: (
    //   <Message
    //       info
    //       header="headerhi"
    //       content="contenthi"
    //   />)
    // }];
    return (
      <div>
        <div style={{height: "128px"}}>
        </div>
        <Accordion fluid styled style={{textAlign: "left", fontSize: "24px"}}>
            <Accordion.Title>
              <Icon name='dropdown' />
              Chemical Engineering
            </Accordion.Title>
            <Accordion.Content>
             placeholder
            </Accordion.Content>
            <Accordion.Title>
              <Icon name='dropdown' />
                Programming
            </Accordion.Title>
            <Accordion.Content>
              <p>
                There are many breeds of dogs. Each breed varies in size and temperament.
                {' '}Owners often select a breed of dog that they find to be compatible
                with their own lifestyle and desires from a companion.
              </p>
            </Accordion.Content>
            <Accordion.Title>
              <Icon name='dropdown' />
              Communication
            </Accordion.Title>
            <Accordion.Content>
              <p>
                Three common ways for a prospective owner to acquire a dog is from pet shops,
                {' '}private owners, or shelters.
              </p>
              <p> A pet shop may be the most convenient way to buy a dog.
                {' '}Buying a dog from a private owner allows you to assess the pedigree and
                {' '}upbringing of your dog before choosing to take it home. Lastly, finding your dog
                {' '}from a shelter, helps give a good home to a dog who may not find one so readily.
              </p>
            </Accordion.Content>
          </Accordion>

      </div>
    )
  }
}
export default Skills;
