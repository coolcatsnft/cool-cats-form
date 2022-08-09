import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import forms from '../static/forms.json';
import { device } from '../utils/device';
import PetBg from '../static/cool-pet-background.jpg';
import CoolCatsHandwritingRegularWoff from '../static/CoolCatsHandwritingRegular.woff';
import CoolCatsHandwritingRegularWoff2 from '../static/CoolCatsHandwritingRegular.woff2';

function Page({ children }) {
  return (
    <>
      <Main>
        {children}
      </Main>
    </>
  )
}

function NotFound() {
  return (
    <Page>
      <p>Form not found</p>
    </Page>
  )
}

function Form({ form }) {
  return (
    <Page>
      <FormWrapper>
        <Header1>{form.title}</Header1>
        <Callout>
          <p>Thank you for your interest in a partnership with the Cool Cats! We're excited that you are considering working with us! Cool Cats are a multigenerational and family friendly brand.</p>
          <p>As such, we are interested in partnering with projects and brands that can add value to our community.</p>
          <p>We prefer to align ourselves with others who understand and appreciate that our community is inclusive, diverse and that we strive for positivity through family friendly, cute and cool content.</p>
          <p>Please fill out the following form and if there is alignment, we will reach out. Thank you!</p>
        </Callout>

        <FormBorder>
          <iframe title={form.slug} src={`https://docs.google.com/forms/d/e/${form.id}/viewform?embedded=true`} width="100%" height="800px" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
        </FormBorder>
      </FormWrapper>
    </Page>
  )
}

function FormPage() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {forms.map((form) => <Route path={`/${form.slug}`} key={form.id} exact element={<Form form={form} />} />)}
          <Route path="/" exact element={<Form form={forms[0]} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default FormPage;

const GlobalStyle = createGlobalStyle`
  :root {
    --background: white;
    --text-primary: #222;
    --text-secondary: #555;
    --global-spacing: 16px;
    --global-border-color: #e9e9e9;
    --global-border-radius: 24px;
    --header-tablet: white;
  }

  @font-face {
    font-family: 'CoolCats Regular';
    font-style: normal;
    font-weight: 400;
    src: local('CoolCats Regular'), url(${CoolCatsHandwritingRegularWoff}) format('woff2'),
    local('CoolCats Regular'), url(${CoolCatsHandwritingRegularWoff2}) format('woff');
    font-display: swap;
  }

  html {
    overflow-y: scroll;
  }

  html,
  body,
  #root {
    margin: 0;
    min-height: 100vh;
  }

  body {  
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--text-primary);
    transition: all 0.2s;

    &,
    * {
      &,
      &:before,
      &:after {
        box-sizing: border-box;
      }
    }
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  z-index: 3;
  position: relative;

  @media ${device.tablet} {
    width: 760px;
    max-width: calc(100% - calc(var(--global-spacing) * 2));
  }
`;

const Callout = styled.div`
  padding: var(--global-spacing);
  margin-bottom: var(--global-spacing);

  @media ${device.tablet} {
    border: var(--global-spacing) solid #e9e9e9;
    border-radius: var(--global-border-radius);
    background-color: #f7f7f7;
    border-color: var(--global-border-color);
  }

  > p {
    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const FormBorder = styled.div`
  width: 100%;
  min-height: 100vh;

  iframe {
    min-height: calc(100vh - 16px);
  }

  @media ${device.tablet} {
    border: var(--global-spacing) solid #e9e9e9;
    border-radius: var(--global-border-radius);
    background-color: #f7f7f7;
    border-color: var(--global-border-color);
  }
`;

const Main = styled.main`
  padding: 0;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  &:before {
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    content: '';
    z-index: 2;
    background: white;
    @media ${device.tablet} {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  @media ${device.tablet} {
    background: url(${PetBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    padding: var(--global-spacing) 0;
  }

  @media ${device.maxwidth} {
    padding: 120px 0;
  }
`;

const Header1 = styled.h1`
  padding: var(--global-spacing);
  margin: 0;
  font-size: 40px;
  line-height: 40px;
  color: var(--text-primary);
  font-family: "CoolCats Regular", sans-serif !important;
  text-align: center;

  @media ${device.tablet} {
    color: var(--header-tablet);
    -webkit-text-stroke: 1px var(--text-secondary);
  }
`;

