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
      <div className='container col-9 col-md-5 mb-3'>
        <div class='card row justify-content-center'>
          <div class='card-header'>
            <div className='h3 card-title'>Contact Us</div>
            <dive class='h6 card-subtitle mb-2 text-muted'>
              We would love to hear your feed back
            </dive>
          </div>
          <div className='card-body'>
            <form
              onSubmit={this.submitForm}
              action='https://formspree.io/xgenpdpw'
              method='POST'
            >
              {status === 'ERROR' && (
                <div class='alert alert-warning' role='alert'>
                  Ooops! There was an error. Please make sure all the fields are
                  filled out correctly
                </div>
              )}
              {status === 'SUCCESS' ? (
                <p className='card-text'>
                  Thanks you for your message. Someone from our team will reach
                  out in response soon. Have a nice day.
                </p>
              ) : (
                <fieldset>
                  {/* name input */}
                  <div className='form-group'>
                    <label for='name'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter name'
                    />
                  </div>
                  {/* email input */}
                  <div className='form-group'>
                    <label for='exampleInputEmail1'>Email address</label>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='Enter email'
                    />
                  </div>
                  {/* textarea input */}
                  <div className='form-group'>
                    <label for='exampleTextarea'>Body</label>
                    <textarea
                      name='message'
                      className='form-control'
                      id='exampleTextarea'
                      rows='3'
                    ></textarea>
                  </div>
                  <button className='btn-lg btn-primary'>Submit</button>
                </fieldset>
              )}
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
