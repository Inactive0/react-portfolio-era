import React, { Component } from 'react'

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name
      var profilepic = 'images/' + this.props.data.image
      var bio = this.props.data.bio
      var street = this.props.data.address.street
      var city = this.props.data.address.city
      var state = this.props.data.address.state
      var zip = this.props.data.address.zip
      var email = this.props.data.email
      var resumeDownload = this.props.data.resumedownload
    }

    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <img
              className='profile-pic'
              src={profilepic}
              alt='Gerald Torres pic'
            />
          </div>
          <div className='nine columns main-col'>
            <h2>Мен туралы</h2>

            <p>{bio}</p>
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Ақпараттар</h2>
                <p className='address'>
                  <span>{name}</span>
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />

                  <span>{email}</span>
                </p>
              </div>
              <div className='columns download'>
                <p>
                  <a href={resumeDownload} className='button' target='_blank'>
                    <i className='fa fa-download'></i>Резюмені жазу
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
