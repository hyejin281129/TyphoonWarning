/**
 * 로그인 페이지의 레이아웃을 담당하는 컴포넌트.
 * 
 * 2022. 01. 07 : 로그인 상태 유지 기능 추가
 */

import React, { useEffect, useState } from 'react';
/* 컴포넌트를 리덕스와 연동시킨다 */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';



const LoginForm = ({ history }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    // 로그인 기능 구현
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user
    }));

    // 인풋 변경 이벤트 핸들러
    const onChange = e => {
      const { value, name } = e.target;
      dispatch(
        changeField({
          form: 'login',
          key: name,
          value
        })
      );
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
      e.preventDefault();
      const { username, password } = form;
      dispatch(login({ username, password }));
    };

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
      dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
      if (authError) {
        console.log('오류 발생');
        console.log(authError);
        setError('로그인 실패');
        return;
      }
      if (auth) {
        console.log('로그인 성공');
        dispatch(check());
      }
    }, [auth, authError, dispatch]);

    // 문제가 있을지도 모름. 후에 문제 생기면 여기 확인할 것
    useEffect(() => {
      if (user) {
        navigate('../');
        // 로그인 유지하가ㅣ
        try {
          localStorage.setItem('user', JSON.stringify(user));
        } catch (e) {
          console.log('localStorage is not working');
        }
      }
    }, [history, user]);

    return(
        <AuthForm
          type="login"
          form={form}
          onChange={onChange}
          onSubmit={onSubmit}
          error={error}
        >
        </AuthForm>
    );
};

export default LoginForm;