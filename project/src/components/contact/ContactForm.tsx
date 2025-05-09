import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimeout = 900000; // 15 minutes

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      setIsIdle(false);
      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, idleTimeout);
    };

    // Set up event listeners for user activity
    const events = ['mousedown', 'keypress', 'scroll', 'mousemove', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, resetIdleTimer);
    });

    // Initial timer
    resetIdleTimer();

    return () => {
      clearTimeout(idleTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetIdleTimer);
      });
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isIdle) {
      if (!window.confirm(
        language === 'de' 
          ? 'Aufgrund längerer Inaktivität könnten Ihre Daten verloren gegangen sein. Möchten Sie das Formular trotzdem absenden?'
          : 'Due to prolonged inactivity, your data might have been lost. Do you still want to submit the form?'
      )) {
        return;
      }
    }
    
    console.log('Form data submitted:', formData);
    setFormSuccess(true);
    
    setTimeout(() => {
      setFormSuccess(false);
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8" role="form">
      <h3 className="text-2xl font-serif font-bold mb-6 text-center">
        {language === 'de' ? 'Tischreservierung' : 'Table Reservation'}
      </h3>
      
      {formSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
          <p>{language === 'de' 
            ? 'Vielen Dank für Ihre Reservierungsanfrage! Wir werden uns in Kürze bei Ihnen melden.'
            : 'Thank you for your reservation request! We will contact you shortly to confirm.'}</p>
        </div>
      )}

      {isIdle && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6" role="alert">
          <p>{language === 'de'
            ? 'Warnung: Aufgrund von Inaktivität könnten Ihre eingegebenen Daten verloren gehen.'
            : 'Warning: Due to inactivity, your entered data might be lost.'}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="sr-only">{language === 'de' ? 'Persönliche Informationen' : 'Personal Information'}</legend>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                {language === 'de' ? 'Name*' : 'Name*'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                {language === 'de' ? 'Telefon*' : 'Phone*'}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-required="true"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="sr-only">{language === 'de' ? 'Reservierungsdetails' : 'Reservation Details'}</legend>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="date" className="block text-gray-700 mb-1">
                {language === 'de' ? 'Datum*' : 'Date*'}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-required="true"
              />
            </div>
            
            <div>
              <label htmlFor="time" className="block text-gray-700 mb-1">
                {language === 'de' ? 'Uhrzeit*' : 'Time*'}
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-required="true"
              >
                <option value="">{language === 'de' ? 'Zeit auswählen' : 'Select time'}</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="guests" className="block text-gray-700 mb-1">
                {language === 'de' ? 'Anzahl der Gäste*' : 'Number of Guests*'}
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-required="true"
              >
                <option value="">{language === 'de' ? 'Anzahl auswählen' : 'Select number'}</option>
                <option value="1">{language === 'de' ? '1 Person' : '1 Person'}</option>
                <option value="2">{language === 'de' ? '2 Personen' : '2 People'}</option>
                <option value="3">{language === 'de' ? '3 Personen' : '3 People'}</option>
                <option value="4">{language === 'de' ? '4 Personen' : '4 People'}</option>
                <option value="5">{language === 'de' ? '5 Personen' : '5 People'}</option>
                <option value="6">{language === 'de' ? '6 Personen' : '6 People'}</option>
                <option value="7">{language === 'de' ? '7 Personen' : '7 People'}</option>
                <option value="8">{language === 'de' ? '8 Personen' : '8 People'}</option>
                <option value="more">{language === 'de' ? 'Mehr als 8 (bitte angeben)' : 'More than 8 (specify)'}</option>
              </select>
            </div>
          </div>
        </fieldset>
        
        <fieldset>
          <legend className="sr-only">{language === 'de' ? 'Zusätzliche Informationen' : 'Additional Information'}</legend>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-1">
              {language === 'de' ? 'Besondere Wünsche' : 'Special Requests'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder={language === 'de' 
                ? 'Bitte teilen Sie uns mit, wenn Sie besondere Wünsche oder Ernährungsanforderungen haben.'
                : 'Please let us know if you have any special requests or dietary requirements.'}
            ></textarea>
          </div>
        </fieldset>
        
        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-md font-medium transition-colors duration-300"
          aria-label={language === 'de' ? 'Reservierung absenden' : 'Submit Reservation'}
        >
          {language === 'de' ? 'Reservierung absenden' : 'Submit Reservation'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;