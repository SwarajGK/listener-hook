# @swaraj0_0/add-event-listener-hook

> Will be able to add event listeners and will be able to intercept the event

[![NPM](https://img.shields.io/npm/v/@swaraj0_0/add-event-listener-hook.svg)](https://www.npmjs.com/package/@swaraj0_0/add-event-listener-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @swaraj0_0/add-event-listener-hook
```

## Usage

```jsx
import React, { Component } from 'react'

import { useAddEventListeners } from '@swaraj0_0/add-event-listener-hook'

const Example = () => {
  const userName = 'SwarajGK';
  const { loading, userData } = useAddEventListeners(userName)
  return (
    <div></div>
  )
}
```

## License

MIT © [@SwarajGK](https://github.com/@SwarajGK)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
