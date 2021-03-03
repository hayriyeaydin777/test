import React from 'react';
import awesomeIcon from '../../../../statics/icon';

function RemoveFollowingsButton() {
  return (
    <button className="remove-followings-button">
      <span>
        <awesomeIcon.faMinus />{' '}
      </span>
      Takipten Çıkar
    </button>
  );
}

export default RemoveFollowingsButton;
