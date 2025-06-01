import React from 'react';
import ButtonCardapio from './buttonCardapio';

interface CardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const cardCardapio: React.FC<CardProps> = ({ title, description, price, image }) => {
  return (
    <div className="mb-4 mx-auto max-w-96 min-w-50 max-w-[380px] w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="sm:h-44 h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">R$ {price.toFixed(2)}</span>
          <ButtonCardapio
            variant="primary"
            size="sm"
          >
            Adicionar
          </ButtonCardapio>
        </div>
      </div>
    </div>
  );
};

export default cardCardapio;
