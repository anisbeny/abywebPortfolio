## Manual Testing Steps for Theme Switcher Functionality

These steps outline the manual testing process to ensure the theme switcher operates correctly.

**I. Visibility and Interaction**

1.  **Button Visibility**:
    *   Open any page of the website.
    *   Verify that the theme switcher button/toggle is clearly visible (e.g., in the header or a designated UI area).
2.  **Button Clickability**:
    *   Hover over the theme switcher button. Verify a pointer cursor or appropriate hover state appears.
    *   Click the theme switcher button. Verify the button registers the click (e.g., visual feedback, or subsequent theme change).

**II. Theme Toggling**

1.  **Switch to Dark Mode**:
    *   With the page in its default (likely light) theme, click the theme switcher button once.
    *   Using browser developer tools (Inspector > Elements tab), check the `<html>` element. Verify that the `class="dark"` attribute is present.
    *   Visually inspect the page. Confirm that the background has changed to a dark color and text has changed to a light color, as defined in the dark theme styles.
2.  **Switch back to Light Mode**:
    *   With the page in dark mode, click the theme switcher button again.
    *   Using browser developer tools, check the `<html>` element. Verify that the `dark` class has been removed.
    *   Visually inspect the page. Confirm that the background has reverted to a light color and text has reverted to a dark color.

**III. Persistence (localStorage)**

1.  **Dark Mode Persistence**:
    *   Click the theme switcher to select dark mode.
    *   Using browser developer tools (Application > Local Storage), verify that a key named `theme` exists and its value is set to `dark`.
    *   Refresh the current page. Verify that the page remains in dark mode.
    *   Close the browser tab (or the entire browser) and then reopen the website. Verify that the page still loads in dark mode.
2.  **Light Mode Persistence**:
    *   Click the theme switcher to select light mode.
    *   Using browser developer tools (Application > Local Storage), verify that the `theme` key's value is updated to `light`.
    *   Refresh the current page. Verify that the page remains in light mode.
    *   Close the browser tab (or the entire browser) and then reopen the website. Verify that the page still loads in light mode.

**IV. System Preference (`prefers-color-scheme`) Integration**

1.  **Initial Load with System Dark Preference**:
    *   Using browser developer tools, clear `localStorage` for the website (remove the `theme` key if it exists).
    *   Change your operating system (OS) or browser settings to prefer dark mode.
        *   *OS (Windows): Settings > Personalization > Colors > Choose your default app mode > Dark.*
        *   *OS (macOS): System Preferences > General > Appearance > Dark.*
        *   *Browser (if applicable): Check browser settings for theme/appearance options.*
    *   Load the website for the first time (or after clearing localStorage).
    *   Verify that the page automatically loads in dark mode.
    *   Check that `localStorage` (key: `theme`) is set to `dark`.
2.  **Initial Load with System Light Preference**:
    *   Using browser developer tools, clear `localStorage` for the website.
    *   Change your OS or browser settings to prefer light mode.
    *   Load the website for the first time.
    *   Verify that the page automatically loads in light mode.
    *   Check that `localStorage` (key: `theme`) is set to `light`.
3.  **User Override of System Preference**:
    *   Set your OS/browser to prefer dark mode.
    *   Clear `localStorage`.
    *   Load the page. It should appear in dark mode.
    *   Manually click the theme switcher to change to light mode.
    *   Verify the page is now in light mode.
    *   Verify `localStorage` (key: `theme`) is set to `light`.
    *   Refresh the page. Verify it remains in light mode (respecting the user's explicit choice over the system preference).
    *   Close and reopen the tab/browser. Verify it still loads in light mode.
    *   Repeat the above steps, but starting with system preference as light, and manually switching to dark.

These tests should confirm that the theme switcher is visible, interactive, correctly toggles themes, persists user choices, and appropriately respects (and allows overriding of) system-level color scheme preferences.
