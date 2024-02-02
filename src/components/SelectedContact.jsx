import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
  
    useEffect(() => {
      const fetchContact = async () => {
        try {
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
          const data = await response.json();
          setContact(data);
          console.log(data); // Check the data in the console
        } catch (error) {
          console.error("Error fetching contact:", error);
        }
      };
  
      if (selectedContactId) {
        fetchContact();
      }
    }, [selectedContactId]);
  
    return (
      <div>
        {contact ? (
          <div>
            <h2>Contact Details</h2>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            {/* Add more details as needed */}
          </div>
        ) : (
          <p>No contact selected</p>
        )}
      </div>
    );
  }