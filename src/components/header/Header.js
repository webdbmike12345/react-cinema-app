import React, { useState, useEffect } from 'react';
import logo from '../../assets/cinema-logo.svg';
import { connect } from 'react-redux';

import './Header.scss';
import { getMovies, setMovieType, setResponsePageNumber, searchResult, searchQuery } from '../../redux/actions/movies';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = (props) => {
  const { getMovies, setMovieType, page, totalPages, setResponsePageNumber, searchResult, searchQuery } = props;
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);
  const [type, setType] = useState('now_playing');
  const [search, setSearch] = useState('');

  const history = useHistory();

  useEffect(() => {
    getMovies(type, page);
    setResponsePageNumber(page, totalPages);
    // eslint-disable-next-line
  }, [type]);

  const setMovieTypeUrl = (type) => {
    setType(type);
    setMovieType(type);
  };

  const onSearchCHange = (e) => {
    setSearch(e.target.value);
    searchQuery(e.target.value);
    searchResult(e.target.value);
  };

  const navigateToMainPage = () => {
    history.push('/');
  };

  const toggleMenu = () => {
    navClass = !navClass;
    menuClass = !menuClass;
    setNavClass(navClass);
    setMenuClass(menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image" onClick={() => navigateToMainPage()}>
            <img src={logo} alt="" />
          </div>
          <div className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`} id="header-mobile-menu" onClick={() => toggleMenu()}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`} id="header-mobile-menu" onClick={() => toggleMenu()}>
            {HEADER_LIST.map((data) => (
              <li key={data.id} className={data.type === type ? 'header-nav-item active-item' : 'header-nav-item'} onClick={() => setMovieTypeUrl(data.type)}>
                <span className="header-list-name">
                  <i className={data.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{data.name}</span>
              </li>
            ))}
            <input className="search-input" type="text" placeholder="Search for a movie" value={search} onChange={onSearchCHange} />
          </ul>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  getMovies: PropTypes.func.isRequired,
  setMovieType: PropTypes.func,
  setResponsePageNumber: PropTypes.func,

  searchResult: PropTypes.func,
  searchQuery: PropTypes.func,
  // list: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number
};

const mapStateToProps = (state) => ({
  // list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages
});

export default connect(mapStateToProps, { getMovies, setMovieType, setResponsePageNumber, searchResult, searchQuery })(Header);
