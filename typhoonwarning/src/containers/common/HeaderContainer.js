/*
* 생성일자 :  2022. 01. 07.
* 컴포넌트에 리덕스를 연결시키기 위한 container
*
* 2022. 01. 07. : 로그아웃 기능 추가
*
*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';


const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  // 로그아웃 기능
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
}

export default HeaderContainer;