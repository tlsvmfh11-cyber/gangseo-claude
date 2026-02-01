interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImagePlaceholder({
  src,
  alt,
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div className={`img-placeholder ${className}`} role="img" aria-label={alt}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          if (target.parentElement) {
            target.parentElement.textContent = alt;
          }
        }}
      />
    </div>
  );
}
