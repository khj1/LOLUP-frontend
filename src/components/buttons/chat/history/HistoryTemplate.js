import React from 'react';
import './HistoryTemplate.scss';

const HistoryTemplate = ({ children }) => {
  return (
    <div className="HistoryTemplate">
      <div className="content">{children}</div> 
    </div>
  );
};

export default HistoryTemplate;