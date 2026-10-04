export function SocialIcon({
  name,
}: {
  name: "facebook" | "whatsapp" | "instagram";
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
      {name === "facebook" && (
        <path
          fill="currentColor"
          d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.64.77-1.64 1.56V12h2.8l-.45 2.89h-2.35v6.99A10 10 0 0 0 22 12Z"
        />
      )}
      {name === "instagram" && (
        <g fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
        </g>
      )}
      {name === "whatsapp" && (
        <>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M20.5 12a8.5 8.5 0 0 1-12.6 7.5L3 21l1.5-4.8A8.5 8.5 0 1 1 20.5 12Z"
          />
          <path
            fill="currentColor"
            d="M8.4 7.4c-.3-.6-.5-.6-.8-.6h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.3s1 2.6 1.2 2.8c.1.2 2 3 4.8 4.1 2.4 1 2.9.8 3.4.7.5 0 1.7-.7 1.9-1.3.3-.7.3-1.2.2-1.3l-.6-.3-1.9-.9c-.3-.1-.5-.2-.7.2l-.9 1c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-.8-1.9Z"
          />
        </>
      )}
    </svg>
  );
}
