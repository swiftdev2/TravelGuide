import { createTheme, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = createTheme({
  primaryColor: 'gold',
  fontFamily: 'Nunito, sans-serif',
  headings: {
    fontFamily: 'Nunito, serif',
  },
  colors: {
    gold: [
      '#FFF9E5',
      '#FFF3CC',
      '#FFE799',
      '#FFDB66',
      '#FFCF33',
      '#FFC300',
      '#CC9C00',
      '#997500',
      '#664E00',
      '#332700',
    ],
    desert: [
      '#2C2A2A',
      '#252323',
      '#1E1C1C',
      '#171515',
      '#100E0E',
      '#090707',
      '#070505',
      '#050303',
      '#030101',
      '#010000',
    ],
    oasis: [
      '#1A3C3A',
      '#153331',
      '#102A28',
      '#0B211F',
      '#061816',
      '#010F0D',
      '#010C0A',
      '#010907',
      '#010604',
      '#000302',
    ],
    spice: [
      '#3C2A1A',
      '#332415',
      '#2A1E10',
      '#21170B',
      '#181006',
      '#0F0901',
      '#0C0701',
      '#090501',
      '#060301',
      '#030100',
    ],
  },
  components: {
    Title: {
      styles: {
        root: {
          fontFamily: 'Nunito, serif',
          fontWeight: 700,
          color: '#FFF9E5',
          transition: 'transform 0.3s ease, color 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            color: '#FFC300',
          },
        },
      },
    },
    Card: {
      styles: {
        root: {
          backgroundColor: '#2C2A2A',
          borderColor: '#FFC300',
          color: '#FFF9E5',
          fontFamily: 'Nunito, sans-serif',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 8px 24px rgba(255, 195, 0, 0.2)',
            borderColor: '#FFDB66',
          },
        },
      },
    },
    Paper: {
      styles: {
        root: {
          backgroundColor: '#2C2A2A',
          borderColor: '#FFC300',
          color: '#FFF9E5',
          fontFamily: 'Nunito, sans-serif',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0 4px 12px rgba(255, 195, 0, 0.15)',
          },
        },
      },
    },
    Button: {
      styles: {
        root: {
          backgroundColor: '#FFC300',
          color: '#2C2A2A',
          fontFamily: 'Nunito, sans-serif',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            backgroundColor: '#FFDB66',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(255, 195, 0, 0.3)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '5px',
            height: '5px',
            background: 'rgba(255, 255, 255, 0.5)',
            opacity: 0,
            borderRadius: '100%',
            transform: 'scale(1, 1) translate(-50%)',
            transformOrigin: '50% 50%',
          },
          '&:focus:not(:active)::after': {
            animation: 'ripple 1s ease-out',
          },
        },
      },
    },
    Badge: {
      styles: {
        root: {
          backgroundColor: '#1A3C3A',
          color: '#FFF9E5',
          fontFamily: 'Nunito, sans-serif',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: '#2A4C4A',
          },
        },
      },
    },
    Text: {
      styles: {
        root: {
          fontFamily: 'Nunito, sans-serif',
          transition: 'color 0.3s ease',
        },
      },
    },
    Image: {
      styles: {
        root: {
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, #2C2A2A, #3C2A1A)',
            opacity: 0.1,
            transition: 'opacity 0.3s ease',
          },
          '&:hover::before': {
            opacity: 0.2,
          },
        },
        imageWrapper: {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'inherit',
        },
        placeholder: {
          background: 'linear-gradient(45deg, #2C2A2A, #3C2A1A)',
          color: '#FFC300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 700,
        },
      },
    },
  },
  other: {
    arabicPattern: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFC300' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    },
  },
}); 