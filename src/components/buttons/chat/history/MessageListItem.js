import React from 'react'; 
import cn from 'classnames';
import './MessageListItem.scss';

const MessageListItem = ({ message, onToggle }) => {
  const { id, text, checked } = message;

  return (
    <div className="MessageListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}> 
        <div className="text">{text}</div>
      </div> 
    </div>
  );
};

export default MessageListItem;