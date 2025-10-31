/**
 * Utility functions for navigation and scrolling
 */

/**
 * Scrolls to a specific section by ID
 * @param sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

/**
 * Navigates to a section, handling both same-page and cross-page navigation
 * @param navigate - React Router navigate function
 * @param location - Current location object
 * @param sectionId - The ID of the section to navigate to
 */
export const navigateToSection = (
  navigate: (path: string) => void,
  location: { pathname: string },
  sectionId: string
): void => {
  if (location.pathname === '/') {
    // Already on home page, just scroll
    scrollToSection(sectionId);
  } else {
    // Navigate to home page with hash
    navigate(`/#${sectionId}`);
  }
};

/**
 * Handles hash-based navigation on page load
 * Useful for deep linking to specific sections
 */
export const handleHashNavigation = (): void => {
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  }
};
