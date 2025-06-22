interface ImagePlaceholderProps {
  width?: number
  height?: number
  text?: string
  className?: string
}

export function ImagePlaceholder({ width = 400, height = 300, text = "Image", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="text-gray-600 font-semibold">{text}</div>
    </div>
  )
}
