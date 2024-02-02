import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

export default function App() {
  // const [contacts, setContacts] = useState(dummyContacts)
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
//     <div>
//       {selectedContactId ? (
//         <div>Selected Contact View</div>
//       ) : (
//         <ContactList setSelectedContactId={setSelectedContactId} />
//       )}
//     </div>
//   )
// }
<>
{selectedContactId ? (
  <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
) : (
  <ContactList setSelectedContactId={setSelectedContactId} />
)}
</>
);
}
