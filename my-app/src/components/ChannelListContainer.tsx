import React from 'react';
import {ChannelList} from 'stream-chat-react'
import Cookies from 'universal-cookie';

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
const HospitalIcon =  require('../assets/hospital.png')
const LogoutIcon = require("../assets/logout.png");


const cookies = new Cookies();

const SideBar = ({ logout }: any) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
  </div>
)

const ChannelListContainer: React.FC = () => {

  const logout = () => {
    cookies.remove('token');
    cookies.remove('userId')
    cookies.remove('username')
    cookies.remove('fullName')
    cookies.remove('avatarURL')
    cookies.remove('phoneNumber')
    cookies.remove('hashPassword')

    window.location.reload();
  }

  return (
    <>
      <SideBar logout={logout}/>

      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList 
          filters={{}}
          channelRenderFilterFn={(): any => {}}
          List={(listProps: any) => (
            <TeamChannelList 
            {...listProps}
            type="team"
            />
          )}
          Preview={(prev: any) => (
            <TeamChannelPreview 
              {...prev}
              type="team"
            />
          )}
        />

      <ChannelList 
          filters={{}}
          channelRenderFilterFn={(): any => {}}
          List={(listProps: any) => (
            <TeamChannelList 
            {...listProps}
            type="messaging"
            />
          )}
          Preview={(prev: any) => (
            <TeamChannelPreview 
              {...prev}
              type="messaging"
            />
          )}
        />
      </div>
    </>
  );
}


export default ChannelListContainer;
