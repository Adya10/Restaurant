import React from 'react';

// This is a simple map component
// In a production app, you might want to use Google Maps, Mapbox, or another mapping service
const Map: React.FC = () => {
  return (
    <div className="h-full min-h-[400px] bg-gray-200 rounded-lg shadow-md overflow-hidden relative">
      {/* Placeholder for the map */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
        <p className="mb-2">Map visualization will be integrated here</p>
        <p className="text-sm">Ernst-Reuter-Str. 28, 95032 HOF</p>
      </div>
      
      {/* In a real implementation, you would use a map service like: */}
      {/* 
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.904458131936!2d11.9177234!3d50.3107651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1248f7af01855%3A0x2ef61c89a4b70ea!2sErnst-Reuter-Str.%2028%2C%2095032%20Hof%2C%20Germany!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
        width="100%" 
        height="100%" 
        style={{border:0}} 
        allowFullScreen={true} 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      */}
    </div>
  );
};

export default Map;