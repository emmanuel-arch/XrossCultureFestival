"use client";

export default function SocialBar() {
  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-4">
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white p-2">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M22 5.92c-.63.28-1.3.48-2 .56.72-.43 1.27-1.12 1.53-1.94-.67.4-1.41.7-2.2.86a3.46 3.46 0 0 0-5.9 3.15A9.83 9.83 0 0 1 3.16 4.9a3.46 3.46 0 0 0 1.07 4.61c-.55-.02-1.07-.17-1.52-.42v.04c0 1.66 1.18 3.03 2.75 3.34-.48.13-.99.16-1.51.06.43 1.34 1.66 2.32 3.13 2.35A6.94 6.94 0 0 1 2 18.57 9.78 9.78 0 0 0 7.29 20c6.9 0 10.68-5.74 10.68-10.71v-.49A7.5 7.5 0 0 0 22 5.92z" fill="currentColor" />
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white p-2">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5a2.5 2.5 0 0 0 0-5zm.02 5.5H2V21h3V9zM9 9h2.8v1.7h.04c.39-.74 1.34-1.52 2.75-1.52 2.95 0 3.5 1.94 3.5 4.46V21h-3v-5.07c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21H9V9z" fill="currentColor" />
        </svg>
      </a>

      <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white p-2">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.6A4.4 4.4 0 1 0 16.4 13 4.4 4.4 0 0 0 12 8.6zm6.5-3.1a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
