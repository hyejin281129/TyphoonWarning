/**
 * 회원가입 페이지의 레이아웃을 담당하는 컴포넌트.
 * 
 * 2022. 01. 07 : 로그인 상태 유지 기능 추가
 */


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

// history 값을 넣어준다.
const RegisterForm = () => {
  const dispatch = useDispatch();
  // error의 값을 쓰기 위한 state 선언
  const [ error, setError] = useState(null);
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));
  const navigate = useNavigate();

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    // 하나라도 비어 있다면
    if([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    // 비밀번호 확인과 비밀번호가 일치하지 않는다면
    if(password !== passwordConfirm){
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(changeField({ form: 'register', key: 'passwordConfirm', value: '' }));
      // TODO: 오류 처리
      return;
    }
    dispatch(register({ username, password }));
  }

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);
  
  // 회원가입 성공 / 실패 처리
  useEffect(() => {
    if (authError){
      // 아이디가 이미 존재할 경우
      if (authError.response.status === 409) {
        setError('이미 존재하는 아이디입니다.');
        return;
      }
      // 기타
      setError('회원가입이 실패했습니다.');
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth){
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if(user){
      // 회원가입 성공시 홈 화면으로 이동
      navigate('/');
      // 로그인 상태 유지
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user]);

  return(
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    >
    </AuthForm>
  );
};

// 회원가입 성공시 홈 화면으로 이동시키기 위해 컴포넌트를 감싸줌
export default RegisterForm;