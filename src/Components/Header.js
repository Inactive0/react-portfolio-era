import React, { Component } from 'react'

class Header extends Component {
  render() {
    if (this.props.data) {
      var firstName = this.props.data.firstName
      var name = this.props.data.name
      var occupation = this.props.data.occupation
      var description = this.props.data.description
      var city = this.props.data.address.city
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target='_blank'>
              <i className={network.className}></i>
            </a>
          </li>
        )
      })
    }

    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Бастапқы
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                Өзім туралы
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Резюме
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Проекттер
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#testimonials'>
                Пікірлер
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#contact'>
                Байланыс
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>
              Мен {name}
              <span style={{ color: '#00d169' }}>.</span>
            </h1>
            <h3>
              Менің мамандығым <span>{occupation}</span> және {city} қаласы. {description}.
            </h3>
            <hr />
            <ul className='social'>{networks}</ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    )
  }
}

export default Header
