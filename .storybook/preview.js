import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OpizeWrapper } from '../src/lib'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <OpizeWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Story />} />
        </Routes>
      </BrowserRouter>
    </OpizeWrapper>
  )
];