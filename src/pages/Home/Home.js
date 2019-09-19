import React from 'react';
import styled from 'styled-components';
import background from './background.jpeg';
import './Home.scss';
import PremiumProducts from '../../components/PremiumProducts/PremiumProducts';

const Home = () => {
  return(
    <section className="home">
      <div className="home__top">
        <Showcase>
          <h1 className="home__title">
            Zapraszam i polecam,
            <span className="home__title--break">Piotr Fronczewski</span>
          </h1>
        </Showcase>

      </div>

      <div className="home__bottom">
        <PremiumProducts />
      </div>

    </section>
  )
}


const Showcase = styled.div`
  min-height: 50vh;
  background: linear-gradient(to right bottom,
    rgba(0,0,0, .3),
    rgba(0,0,0, .7)
  ),
    url(${background}) center center/cover;
`;

export default Home;