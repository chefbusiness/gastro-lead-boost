import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to elements and sections
 * @returns Object with scroll utility functions
 */
export function useScrollTo() {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToContact = useCallback(() => {
    scrollToElement('contact-form');
  }, [scrollToElement]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }, []);

  const scrollToCaseStudies = useCallback(() => {
    scrollToElement('case-studies');
  }, [scrollToElement]);

  return { 
    scrollToElement, 
    scrollToContact, 
    scrollToTop,
    scrollToCaseStudies
  };
}
