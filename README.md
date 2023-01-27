<div align="center">
  <a href="https://www.styled-components.com">
    <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="150px" />
  </a>
</div>

<br />

<div align="center">
  <strong>Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅</strong>
  <br />
  <br />
</div>

---

## Project structure:
<img src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e7x7rgowqferuqcuzlmc.png' alt='project structure'>

---

---

Utilizing [tagged template literals](https://www.styled-components.com/docs/advanced#tagged-template-literals) (a recent addition to JavaScript) and the [power of CSS](https://www.styled-components.com/docs/api#supported-css), `styled-components` allow you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

```jsx
const Button = styled.button`
  color: grey;
`;
```

Alternatively, you may use [style objects](https://www.styled-components.com/docs/advanced#style-objects). This allows for easy porting of CSS from inline styles, while still supporting the more advanced styled-components capabilities like component selectors and media queries.

```jsx
const Button = styled.button({
  color: 'grey',
});
```

Equivalent to:

```jsx
const Button = styled.button`
  color: grey;
`;
```

`styled-components` is compatible with both React (for web) and React Native – meaning it's the perfect choice even for truly universal apps! See the [documentation about React Native](https://www.styled-components.com/docs/basics#react-native) for more information.

_Supported by [Front End Center](https://frontend.center). Thank you for making this possible!_

## Upgrading from v4

1. `npm install styled-components@^5.0.0 react@^16.8 react-dom@^16.8 react-is@^16.8`
1. ??
1. Profit!

> If you use jest-styled-components, make sure you update that too.

## [Docs](https://www.styled-components.com/docs)

**See the documentation at [styled-components.com/docs](https://www.styled-components.com/docs)** for more information about using `styled-components`!

Quicklinks to some of the most-visited pages:

- [**Getting started**](https://www.styled-components.com/docs/basics)
- [API Reference](https://styled-components.com/docs/api)
- [Theming](https://www.styled-components.com/docs/advanced#theming)
- [Server-side rendering](https://www.styled-components.com/docs/advanced#server-side-rendering)
- [Tagged Template Literals explained](https://www.styled-components.com/docs/advanced#tagged-template-literals)

## Example

<!-- prettier-ignore -->
```JSX
import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```

This is what you'll see in your browser:

<div align="center">
  <a href="https://styled-components.com">
    <img alt="Screenshot of the above code ran in a browser" src="http://i.imgur.com/wUJpcjY.jpg" />
  </a>
</div>