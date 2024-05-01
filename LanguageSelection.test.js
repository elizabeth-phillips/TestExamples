import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageSelection from './LanguageSelection';
import LocaleContext from './LocaleContext';

// Mocking the LocaleContext
jest.mock('./LocaleContext', () => ({
  Consumer: ({ children }) => children({ currLocaleObj: { language: 'English', locale: 'en-US' }, updateCurrLocaleObj: jest.fn() })
}));

describe('LanguageSelection component', () => {
  test('renders correctly with default locale', () => {
    const { getByText } = render(<LanguageSelection />);
    expect(getByText('English :')).toBeInTheDocument();
    expect(getByText('English')).toBeInTheDocument();
    expect(getByText('French')).toBeInTheDocument();
    expect(getByText('Spanish')).toBeInTheDocument();
  });

  test('calls updateCurrLocaleObj when select value is changed', () => {
    const updateCurrLocaleObjMock = jest.fn();
    // Overriding the mock context with custom behavior
    jest.spyOn(LocaleContext, 'Consumer').mockImplementation(({ children }) => children({ currLocaleObj: { language: 'English', locale: 'en-US' }, updateCurrLocaleObj: updateCurrLocaleObjMock }));

    const { getByLabelText } = render(<LanguageSelection />);
    const selectElement = getByLabelText('English :');

    fireEvent.change(selectElement, { target: { value: 'fr-FR' } });

    expect(updateCurrLocaleObjMock).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        value: 'fr-FR'
      })
    }));
  });
});
