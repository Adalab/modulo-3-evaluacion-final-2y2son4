import React from 'react';

import ResetBtn from '../reset/ResetBtn';

import '../.././stylesheets/renderCharacters/CharacterNotFound.scss';

import terry from '../.././images/gifs/terry.gif';

const Character = (props) => {
  const { resetBtn, search } = props;
  return (
    <div className="notFound">
      <p className="notFound__text">
        Your search for <span className="notFound__text--search">{search}</span> returned no results, bitch!
      </p>
      <img className="notFound__img" src={terry} alt="Sorry, no results, bitch!" />
      <ResetBtn resetBtn={resetBtn} classResetBtn={'reset__notFound'} classResetIcon={'reset__notFound--icon'} />
    </div>
  );
};

export default Character;
