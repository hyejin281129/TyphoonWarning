import React, { useEffect } from 'react';
/* 컴포넌트를 리덕스와 연동시킨다 */
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */


const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({auth}) => ({
      form: auth.login
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
      // 구현 예정
    };

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
      dispatch(initializeForm('login'));
    }, [dispatch]);

    return(
        <AuthForm
          type="login"
          form={form}
          onChange={onChange}
          onSubmit={onSubmit}
        >
        </AuthForm>
    );
};

export default LoginForm;