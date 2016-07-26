import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class ContactsApp extends Component{
    render(){
        return(
            <div>
                <SearchBar />
                <ContactList contacts={this.props.contacts} />
            </div>
        )
    }
}
ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class SearchBar extends Component{
    render(){
        return <input type="search" placeholder="search" />
    }
}

class ContactList extends Component{
    render(){
        return(
        <ul>
            {this.props.contacts.map(
                (contact) => <ContactItem key={contact.email}
                                          name={contact.name}
                                          email={contact.email} />
            )}
        </ul>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends Component{
    render(){
        return <li>{this.props.name} - {this.props.email}</li>
    }
}
ContactItem.propTypes = {
    name : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired
}

let contacts = [
    { name: 'chris', email: 'chris@gmail.com'},
    { name: 'joel', email: 'joel@gmail.com'},
    { name: 'charles', email: 'charles@gmail.com'},
    { name: 'min-j', email: 'min-j@gmail.com'},
    { name: 'sejin', email: 'sejin@gmail.com'},
    { name: 'wonjun', email: 'wonjun@gmail.com'},
    { name: 'wooyj', email: 'wooyj@gmail.com'},

]
render(
  <ContactsApp contacts={contacts} />,
  document.getElementById('root')
);
