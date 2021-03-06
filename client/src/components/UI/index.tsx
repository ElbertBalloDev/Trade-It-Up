import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

interface ITheme {
  colors: {
    white: string;
    blue: string;
  };
  fonts: Array<string>;
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const theme: ITheme = {
  colors: {
    white: '#FFF',
    blue: '#2196f3'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

interface IProps {
  children: React.ReactNode;
}

interface IButtonProps {
  color?: string;
  uppercase?: boolean;
  fullWidth?: boolean;
  theme: ITheme;
}

export const Viewport = styled.div`
  max-width: 1300px;
  min-height: 800px;
  width: auto;
  height: auto;
  margin: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	border-radius: 0.25rem;
	background: #fff;
`;

export const Row = styled.div`
  display: flex;
  flex-director: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
`;

export const SlideUp = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s;
  overflow: hidden;
  height: 0;
  background: transparent;
  text-align: center;
  font-size: 50px;
`;

export const RowItem = styled.div`
  flex: 0 1 25%;
  border: 1px solid black;
  margin: 10px;
  cursor: pointer;
  height: 300px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover {
    ${SlideUp} {
      height: 100%;
    }
  }

  @media (max-width: 600px) {
    flex: 1 1 30%;
    height: 200px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-director: column;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  outline: none;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;
	font: 95% Arial, Helvetica, sans-serif;
	transition: all 0.30s ease-in-out

  &:focus {
    box-shadow: 0 0 5px #2196f3;
    padding: 3%;
    border: 1px solid #2196f3;
  }
`;

export const Button = styled.button<IButtonProps>`
  position: relative;
  display: block;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: ${(props: IButtonProps) =>
    props.color ?? props.theme.colors.blue};
  color: #fff;
  transition: background-color 0.3s;
  width: 100px;
  width: ${(props: IButtonProps) => (props.fullWidth ? '100%' : '100px')};
  height: 45px;
  font-size: 16px;
  text-transform: ${(props: IButtonProps) =>
    props.uppercase ? 'uppercase' : 'none'};

  &:hover {
    background-color: ${(props: IButtonProps) =>
      props.color ?? props.theme.colors.blue};
    cursor: pointer;
  }

  &:disabled {
    background-color: #9ccdf5;
    cursor: not-allowed;
  }
`;

export const FormContainer = styled.div`
  font: 95% Arial, Helvetica, sans-serif;
  max-width: 400px;
  margin: 5% auto;
  padding: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const GlobalStyle = createGlobalStyle`
	body {
		background: #9BB5B0;
	}
`;

export const Theme: React.FC<IProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
