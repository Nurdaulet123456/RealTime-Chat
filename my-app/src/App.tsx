import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie';

const apiKey = 'yz8659fr3b8j'
const client = StreamChat.getInstance(apiKey)

const App: React.FC = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team light'>
          <ChannelListContainer 
          
          />

          <ChannelContainer 
            
          />
      </Chat>
    </div>
  );
}

export default App;
