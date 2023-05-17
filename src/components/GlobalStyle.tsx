import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #efefef;
}
.m-1 {
  margin: 0.5rem;
}

.m-2 {
  margin: 1rem;
}

.mx-2 {
  margin: 0 1.5rem;
}

.my-1 {
  margin: 0.5rem 0;
}

.my-2 {
  margin: 1.5rem 0;
}

.mb-1 {
  margin-bottom: 1rem;
}

.p-1 {
  padding: 0.5rem;
}

.p-2 {
  padding: 1rem;
}

.px-2 {
  padding: 0.5rem 1rem;
}
.text-center {
  text-align: center;
}

.font-bold {
  font-weight: bold;
}
.border {
  border: 1px solid #ccbdbd;
}

.border-rounded {
  border-radius: 4px;
}
.flex-row {
  display: flex;
  flex-wrap: nowrap;
  justify-conten: space-between;
  align-items: center;
}

.flex-row-left {
  margin: 0.2rem;
  flex-grow: 1;
}
.font-sm {
  font-size: 0.8rem;
}
.as-link {
  cursor: pointer;
  &:hover: {
    text-decoration: underline;
  }
}
`;

export default GlobalStyle;
