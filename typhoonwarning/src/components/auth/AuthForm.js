import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 회원가입 및 로그인 폼
 */

// 이런식으로!!! 이해함
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #101010;
    font-weight: 700;
    font-size: 2rem;
    line-height: 56px;
    text-align: center;
    margin-bottom: 1rem;
  }
  form {
    width: 478px;
    margin: 0 auto;
  }
`;


// 로그인 폼
const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #ccc;
  color: #101010;
  margin-bottom: 10px;
  // 원본
  font-size: 1rem;
  border: 1px solid ${palette.gray[5]};
  outline: none;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px soild ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
  
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

/* button 스타일 */
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
  padding: 1rem 0;
`;

/* type props에 따라 다른내용 보여주기 */
const textMap = {
  login: '로그인',
  register: '회원가입',
};

/**
 * 에러를 보여주는 코드
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`


const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원이 아니신가요?</Link>
        ) : (
          <Link to="/login">이미 회원이신가요?</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
