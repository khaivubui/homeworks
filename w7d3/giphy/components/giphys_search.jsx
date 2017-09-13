import React from 'react';

import GiphysIndex from './giphys_index';

const GiphysSearch = (props) => (
  <div>
    <form onSubmit={e => {
        e.preventDefault();
        props.fetchSearchGiphys(
          e.target.querySelector('input[type=text]').value
        );
      }}>
      <input type='text' name='query'/>
      <input type='submit' value='Search'/>
    </form>
    {props.giphys.map(giphy => (
      <img key={giphy.id} src={giphy.images.fixed_height.url}/>
    ))}
  </div>
);

export default GiphysSearch;
