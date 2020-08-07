import React from 'react';

import './SceneItem.css';

const sceneItem = props => (
  <li key={props.sceneId} className="scenes__list-item">
    <div>
      <h1>{props.title}</h1>
      <h2>
        ${props.price} - {new Date(props.date).toLocaleDateString()}
      </h2>
    </div>
    <div>
      {props.userId === props.creatorId ? (
        <div>
          <p>Your the owner of this scene.</p>
          <button className="btn" onClick={props.onDetail.bind(this, props.sceneId)}>
            View Details
          </button>
        </div>
      ) : (
        <button className="btn" onClick={props.onDetail.bind(this, props.sceneId)}>
          View Details
        </button>
      )}
    </div>
  </li>
);

export default sceneItem;
