declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        HapticFeedback?: {
          impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): void;
        };
      };
    };
  }
}

export function vibrate() {
  if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.HapticFeedback) {
    const hapticFeedback = window.Telegram.WebApp.HapticFeedback;
    
    hapticFeedback.impactOccurred('medium');
  }
}