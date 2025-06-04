import type React from "react"
import ButtonCardapio from "./buttonCardapio"
import Image from "next/image"
import type { StaticImageData } from "next/image"

interface CardProps {
  title: string
  description: string
  price: number
  image: StaticImageData
}

const CardCardapio: React.FC<CardProps> = ({ title, description, price, image }) => {
  return (
    <div className="flex flex-row max-h-36 w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Content section with fixed width */}
      <div className="flex flex-col justify-between p-4 w-2/3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">R$ {price.toFixed(2)}</span>
          <ButtonCardapio variant="primary" size="sm">
            Adicionar
          </ButtonCardapio>
        </div>
      </div>

      {/* Image section with fixed width */}
      <div className="w-1/3 h-40">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default CardCardapio
