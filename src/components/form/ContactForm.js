// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div class='container h-100 '>
        <div class=' row justify-content-center align-content-center h-100 m-3'>
          <div class='col-10 col-md-8 col-lg-6 '>
            <form
              onSubmit={this.submitForm}
              action='https://formspree.io/xgenpdpw'
              method='POST'
            >
              <fieldset>
                {/* name input */}
                <div class='form-group'>
                  <label for='name'>Name</label>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Enter name'
                  />
                </div>
                {/* email input */}
                <div class='form-group'>
                  <label for='exampleInputEmail1'>Email address</label>
                  <input
                    type='email'
                    name='email'
                    class='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                  />
                </div>
                {/* textarea input */}
                <div class='form-group'>
                  <label for='exampleTextarea'>Example textarea</label>
                  <textarea
                    name='message'
                    class='form-control'
                    id='exampleTextarea'
                    rows='3'
                  ></textarea>
                </div>
              </fieldset>
              {status === 'SUCCESS' ? (
                <p>Thanks!</p>
              ) : (
                <button class='btn btn-primary'>Submit</button>
              )}
              {status === 'ERROR' && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
