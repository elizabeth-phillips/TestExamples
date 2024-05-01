import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import LocaleContext from './LocaleContext';

// Mocking the data.json file
jest.mock('./data.json', () => ([
  { locale: 'en-US', language: 'English' },
  { locale: 'fr-FR', language: 'French' },
  { locale: 'es-ES', language: 'Spanish' },
]));

describe('App component', () => {
  test('renders correctly with default theme and locale', () => {
    const { getByText, getByLabelText } = render(<App />);
    expect(getByText('English :')).toBeInTheDocument();
    expect(getByText('English')).toBeInTheDocument();
    expect(getByText('French')).toBeInTheDocument();
    expect(getByText('Spanish')).toBeInTheDocument();

    const lightThemeCheckbox = getByLabelText('Light theme');
    expect(lightThemeCheckbox).toBeInTheDocument();
    expect(lightThemeCheckbox.checked).toBe(true); // Default theme is light
  });

  test('changes theme on checkbox click', () => {
    const { getByLabelText } = render(<App />);
    const darkThemeCheckbox = getByLabelText('Dark theme');

    fireEvent.click(darkThemeCheckbox);

    expect(darkThemeCheckbox.checked).toBe(true);
  });

  test('changes locale on select change', () => {
    const { getByLabelText } = render(<App />);
    const selectElement = getByLabelText('English :');

    fireEvent.change(selectElement, { target: { value: 'fr-FR' } });

    expect(selectElement.value).toBe('fr-FR');
  });

  test('context values are passed down correctly', () => {
    const { getByText } = render(<App />);
    
    // Mock context values
    const mockTheme = 'light';
    const mockCurrLocaleObj = { language: 'English', locale: 'en-US' };

    // Overriding the mock context with custom behavior
    jest.spyOn(LocaleContext, 'Provider').mockImplementation(({ children, value }) => {
      expect(value.theme).toBe(mockTheme);
      expect(value.curr
