import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie';

import './App.css';

import { ChannelContainer, ChannelListContainer, Auth } from './components/index'

const apiKey = 'yz8659fr3b8j'
const cookies = new Cookies();
const client: any = StreamChat.getInstance(apiKey)
const authToken = cookies.get('token')

if (authToken) {
    client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      image: cookies.get('avatarURL'),
      phoneNumber: cookies.get('phoneNumber'),
      hashPassword: cookies.get('hashPassword'),
    }, authToken)
}


const App: React.FC = () => {

  if (!authToken) return <Auth />

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
