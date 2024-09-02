import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../assets/veeranjaneya_glass_works_logo.png"; // Make sure the path is correct

const WhatsAppButton = () => {
  return (
    <div className="floating-whatsapp">
      <FloatingWhatsApp
        phoneNumber="+919900005963"
        accountName="Sri Veeranjaneya Glass Works & Windshield Care"
        avatar={logo} // Pass the imported logo here
        statusMessage="Typically replies within 1 hour" // Optional
        chatMessage="Hello! How can I help you?" // Optional
        allowClickAway // Optional
        notification // Optional
        notificationDelay={60000} // Optional
      />
    </div>
  );
};

export default WhatsAppButton;
