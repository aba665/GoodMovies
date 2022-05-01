import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Components from './welcome.js';

describe('Testando o componente', () => {
    test('Deve conter um botão de incrementar', () => {
        render(<Components />);
    
    const tag = screen.getByRole("button", {name: "+"});

    expect(tag).toBeInTheDocument();
    })

    test('Deve conter um botão de decrementar', () => {
        render(<Components />);
    
    const tag = screen.getByRole("button", {name: "-"});

    expect(tag).toBeInTheDocument();
    })

    test('Deve conter um h1 com um texto', () => {
        render(<Components />);
    
    const welcomeTitle = screen.getByText("Olá seja bem vindo ao meu teste!");

    expect(welcomeTitle).toBeInTheDocument();
    })
})