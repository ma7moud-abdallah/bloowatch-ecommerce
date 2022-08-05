// test-utils.jsx
import React, { ReactElement } from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import storeReducer from './redux/productsReducer'
import cartReducer from './redux/cartReducer'
import { BrowserRouter } from 'react-router-dom'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;

function render(
  ui:ReactElement<any, any>,
  {
    store = configureStore({ reducer: { data: storeReducer, cart: cartReducer } }),
    ...renderOptions
  } = {}
): any {
  function Wrapper(props: any) {
    return <Provider store={store}>
       <BrowserRouter>
         {props.children}
      </BrowserRouter>
      </Provider>
  }
  const renderProps: any = { wrapper: Wrapper, ...renderOptions }
  return rtlRender(ui, renderProps)
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }