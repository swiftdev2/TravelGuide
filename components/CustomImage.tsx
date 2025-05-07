import { Skeleton, Text, Box, Transition } from '@mantine/core';
import { useState, useEffect } from 'react';
import NextImage from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  fallbackText?: string;
  priority?: boolean;
}

export function CustomImage({ 
  src, 
  alt, 
  height = 200, 
  width, 
  fallbackText,
  priority = false 
}: CustomImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Function to generate a placeholder based on the alt text
  const generatePlaceholder = (text: string) => {
    const colors = ['2C2A2A', 'FFC300'];
    const encodedText = encodeURIComponent(text.substring(0, 30));
    return `https://placehold.co/${width || 400}x${height}/${colors[0]}/${colors[1]}?text=${encodedText}`;
  };

  // Function to get a reliable image source
  const getImageSource = () => {
    if (error) {
      return generatePlaceholder(alt);
    }
    
    if (!src.startsWith('http')) {
      return generatePlaceholder(alt);
    }

    return src;
  };

  // Reset states when src changes
  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [src]);

  return (
    <Box 
      style={{ 
        position: 'relative', 
        height: height, 
        width: width || '100%',
        overflow: 'hidden',
        borderRadius: 'inherit',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading Skeleton */}
      <Transition mounted={loading} transition="fade" duration={400}>
        {(styles) => (
          <Skeleton
            height={height}
            width={width || '100%'}
            radius="md"
            style={{ 
              ...styles,
              position: 'absolute', 
              top: 0, 
              left: 0,
              background: 'linear-gradient(45deg, #2C2A2A, #3C2A1A)',
              zIndex: 1,
            }}
          />
        )}
      </Transition>
      
      {/* Main Image */}
      <Box
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          opacity: loading ? 0 : 1,
          transition: 'all 0.3s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <NextImage
          src={getImageSource()}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          onLoad={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
          style={{
            objectFit: 'cover',
            borderRadius: 'inherit',
          }}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
            `<svg width="${width || 400}" height="${height}" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#2C2A2A"/>
              <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#FFC300" text-anchor="middle" dy=".3em">${alt}</text>
            </svg>`
          ).toString('base64')}`}
        />
      </Box>
      
      {/* Error Fallback Text */}
      <Transition mounted={error && !!fallbackText} transition="fade" duration={400}>
        {(styles) => (
          <Text
            size="sm"
            c="dimmed"
            style={{
              ...styles,
              position: 'absolute',
              bottom: 8,
              left: 8,
              right: 8,
              textAlign: 'center',
              background: 'rgba(0,0,0,0.7)',
              padding: '4px 8px',
              borderRadius: 4,
              color: '#FFC300',
              zIndex: 2,
            }}
          >
            {fallbackText}
          </Text>
        )}
      </Transition>

      {/* Hover Overlay */}
      <Transition mounted={isHovered} transition="fade" duration={200}>
        {(styles) => (
          <Box
            style={{
              ...styles,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
              zIndex: 1,
            }}
          />
        )}
      </Transition>
    </Box>
  );
} 