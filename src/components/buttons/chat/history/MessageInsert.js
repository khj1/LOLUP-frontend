import React, { useState, useCallback } from 'react'; 
import './MessageInsert.scss';

const MessageInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); // value 값 초기화

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="MessageInsert" onSubmit={onSubmit}>
      <input
        placeholder="메세지를 입력해주세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInsert;
