import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import RegisterForm from '../../containers/auth/RegisterForm';
import HeaderContainer from '../../containers/common/HeaderContainer';
import FooterContainer from '../../containers/common/FooterContainer';

const RegisterPage = () => {
  return (
    <>
      <HeaderContainer />
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
      <FooterContainer />
    </>
  );
};

export default RegisterPage;
