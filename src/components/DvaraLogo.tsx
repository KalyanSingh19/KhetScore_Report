export function DvaraLogo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 60" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dvara Logo Design */}
      <g transform="scale(0.8)">
        {/* Main Logo Shape */}
        <path 
          d="M20 15 L35 15 C42 15 47 20 47 27 C47 34 42 39 35 39 L20 39 Z" 
          fill="#ffffff" 
          stroke="#ffffff" 
          strokeWidth="2"
        />
        <path 
          d="M20 45 L35 45 C42 45 47 50 47 57 C47 64 42 69 35 69 L20 69 Z" 
          fill="#ffffff" 
          stroke="#ffffff" 
          strokeWidth="2"
        />
        
        {/* Text: DVARA */}
        <text x="60" y="30" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">
          DVARA
        </text>
        
        {/* Text: E-Registry */}
        <text x="60" y="50" fill="#ffffff" fontSize="12" fontFamily="Arial, sans-serif">
          E-Registry
        </text>
        
        {/* Decorative Elements */}
        <circle cx="15" cy="27" r="3" fill="#ffffff" opacity="0.8" />
        <circle cx="15" cy="57" r="3" fill="#ffffff" opacity="0.8" />
        
        {/* Additional Design Elements */}
        <rect x="52" y="35" width="80" height="1" fill="#ffffff" opacity="0.6" />
      </g>
    </svg>
  );
}