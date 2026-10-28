ARAVEX TECH STUDIO — ANIMATED BRAND LOADER
=======================================
Files
- aravex-loading-animation.svg: fully self-contained scalable SVG, transparent background, native SVG paths + CSS keyframes (no external fonts, dependencies or embedded raster images).
- aravex-loader-preview.html: browser demo on #090A0C (keep SVG in same folder).
- aravex-loader-square-1080p60.mp4: optional 1080 x 1080, 60fps, dark-background video preview.

Web use
1. Copy aravex-loading-animation.svg into your web app's public/ directory.
2. For Next.js, display it as an asset (the SVG CSS plays automatically):

   <img src="/aravex-loading-animation.svg" alt="ARAVEX Tech Studio" width="640" height="213" />

3. For a full screen loading overlay in React or HTML, use:

   <div style="position:fixed;inset:0;background:#090A0C;display:grid;place-items:center;z-index:9999">
     <img src="/aravex-loading-animation.svg" alt="Loading ARAVEX Tech Studio" style="width:min(88vw,800px);height:auto" />
   </div>

4. Remove/unmount the loader as soon as the actual page is ready; never delay content solely to finish the animation.
5. For transparent backgrounds, don't set a background color on the SVG or the img. Set your container's background.

Accessibility & customization
- honors prefers-reduced-motion and renders a static logo when motion is reduced.
- animation cycle is 2.5 seconds.
- CSS colors inside the SVG: #F7F7F5 (primary), #8196B0 (brand blue), #64768B (reticles), #10B981 (very subtle halo only).
- CSS keyframes in the <style> section control all timing. To play only once, change `infinite` to `1 forwards` in animation declarations; note the final 96-100% fades out, so for a persistent one-shot change end opacity to 1 as needed.
- Svg artwork has been auto-vector-traced from the attached raster logo. Inspect at high zoom before mission-critical brand use; official vector masters are ideal if available.
- The MP4 is a preview with an opaque #090A0C background. Use SVG for a true transparent web animation.
