# react-boost-common

This library provides an opinionated set of components and hooks to build React applications.

## Installation

```bash
npm install react-boost-common
```

## Usage

```tsx
import React from 'react'
import { Hello } from 'react-boost-common'

const App = () => {
  return <Hello text="Create React Library Example 😄" />
}
```

## Dependent Libraries

- axios
- react-bootstrap
- react-icons
- react-router-dom
- sass


## React Elements

| Element                     | Description                | Exports                    |
|-----------------------------|----------------------------|----------------------------|
| components/Hello            | Hello World Demo component | `Hello`                    |
| components/Loading          | Loading indicators         | `Loading`,`LoadingSpinner` |  
| components/Heading          | Page headings              | `Heading`                  |
| --                          |                            |                            |
| helpers/useLogger           |                            | `useLogger`                |
| helpers/useQuery            |                            | `useQuery`,`useQueryDict`  |
| --                          |                            |                            |
| routing/NotImplemented.page |                            | `NotImplementedPage`       |
| routing/Redirect.page       |                            | `RedirectPage`             |
|                             |                            |                            |
