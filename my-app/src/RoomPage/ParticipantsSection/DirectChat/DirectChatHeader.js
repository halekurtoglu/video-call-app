import React from 'react';

const DirectChatHeader = ({ activeConversation }) => {
    return (
        
        <div className='direct_chat_header'>
            <div><p className='direct_chat_header_paragraph'>
                Direct Chat
            </p></div>
            <p className='direct_chat_header_paragraph'>
                /{activeConversation ? activeConversation.identity : ''}
            </p>
        </div>
    );
};

export default DirectChatHeader;