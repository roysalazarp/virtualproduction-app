import React from 'react';

import SceneItem from './SceneItem/SceneItem';
import './SceneList.css';

const sceneList = props => {
  const scenes = props.scenes.map(scene => {
    return (
      <SceneItem
        key={scene._id}
        sceneId={scene._id}
        title={scene.title}
        price={scene.price}
        date={scene.date}
        userId={props.authUserId}
        creatorId={scene.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });

  return <ul className="scene__list">{scenes}</ul>;
};

export default sceneList;
