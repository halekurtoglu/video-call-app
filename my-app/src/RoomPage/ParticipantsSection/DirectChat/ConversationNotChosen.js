import React from 'react';

const ConversationNotChosen = () => {
    return (
        <div className='conversation_not_chosen_overlay'>
            <p className='conversation_not_chosen_overlay_text'>
                Mesaj atılacak kişi seçilmedi..
            </p>
        </div>
    );
};

export default ConversationNotChosen;