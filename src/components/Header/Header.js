import React from 'react';

const Header = () => {
  return (
    <section className="section-top">
      <div className="container">
        <div>
          <a href="/" className="section-top__logo">Color Picker Image</a>
        </div>
        <div>
          <ul className="section-top__social-network">
            <li><a href="https://github.com/vadimghedreutan">Twitter</a></li>
            <li><a href="https://github.com/vadimghedreutan">Github</a></li>
            <li><a href="https://github.com/vadimghedreutan">Instagram</a></li>
          </ul>
        </div>
      </div>
  </section>
  )
}

export default Header;