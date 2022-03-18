import React from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/search.png';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useState } from 'react';

const HeaderCotainer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
`;

const Tilte = styled.div`
  margin-left: 20px;
  font-size: 30px;
  font-weight: 400;
  color: ${(props) => props.theme.red};
`;

const Category = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
  font-weight: 200;
  color: ${(props) => props.theme.white.lighter};
  > ul > li {
    float: left;
    margin-right: 20px;
    &:hover {
      font-weight: 600;
    }
  }
`;

const Search = styled(motion.div)`
  width: 5px;
  height: 5px;
  border-radius: 10px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background-image: url(${searchIcon});
  filter: invert(100%);
  background-repeat: no-repeat;
  background-size: contain;
`;

const Alarm = styled.div`
  color: ${(props) => props.theme.white.lighter};
`;

function Header() {
  const [clicked, setClick] = useState(false);
  const toggleClick = () => setClick((prev) => !prev);

  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['rgba(46, 46, 46, 0)', 'rgba(46, 46, 46, 1)']
  );

  return (
    <>
      <HeaderCotainer style={{ backgroundColor: opacity }}>
        <Tilte> NOMFLIX</Tilte>
        <Category>
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li> New & Popular</li>
            <li>My List</li>
          </ul>
        </Category>
        {clicked ? (
          <Search
            onClick={toggleClick}
            animate={{
              width: '150px',
              height: '30px',
              backgroundColor: 'white',
              color: 'black',
              filter: 'none',
            }}
          >
            Search
          </Search>
        ) : (
          <Search
            onClick={toggleClick}
            animate={{
              width: '50px',
              height: '20px',
            }}
          ></Search>
        )}
        <Alarm></Alarm>
      </HeaderCotainer>
    </>
  );
}

export default Header;
