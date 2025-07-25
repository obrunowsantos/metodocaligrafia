"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  images: { src: string; alt: string }[]
  interval?: number // Interval in milliseconds for auto-play
}

export function Carousel({ images, interval = 3000 }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () => setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      interval,
    )

    return () => {
      resetTimeout()
    }
  }, [currentSlide, images.length, interval])

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg group">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              priority={index === 0} // Prioritize loading the first image
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        size="icon"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        size="icon"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? "bg-blue-500" : "bg-gray-300"
            } transition-colors`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
