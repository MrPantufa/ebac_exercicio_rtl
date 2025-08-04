// src/components/PostComments/PostComments.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from '.';

describe('Componente PostComments', () => {
  it('Deve permitir inserir dois comentários', () => {
    render(<PostComments />);

    const input = screen.getByTestId('comment-input') as HTMLTextAreaElement;
    const button = screen.getByTestId('comment-button') as HTMLButtonElement;

    // 1º comentário
    fireEvent.change(input, { target: { value: 'Comentário 1' } });
    fireEvent.click(button);

    // 2º comentário
    fireEvent.change(input, { target: { value: 'Comentário 2' } });
    fireEvent.click(button);

    // Verifica se existem exatamente 2 itens na lista
    const comments = screen.getAllByTestId('comment-item');
    expect(comments).toHaveLength(2);

    // Verifica se o texto de cada comentário está correto
    expect(comments[0]).toHaveTextContent('Comentário 1');
    expect(comments[1]).toHaveTextContent('Comentário 2');
  });
});
