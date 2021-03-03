import React from 'react';

import VideoChatPage from '../../middleware/help/video-chat';

import Master from '../master';

import Footer from '../../middleware/footer';

const VideoChat = props => {
    return (
        <Master>
            <div className="container-fluid main-container">
                {props.children}
                <VideoChatPage/>
                
            </div>
        </Master>
    )
};

export default VideoChat;