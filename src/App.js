import Navbar from "./components/Navbar";
import Card from "./components/Card";
import styles from "./App.module.css";
import Empty from "./components/Empty";
import AddContact from "./components/AddContact";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(false);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Marcellino Candyawan",
      phone: "0123456789",
    },
  ]);
  //filter untuk memfilter hasil search pada contacts
  const [filter, setFilter] = useState([]);

  function handleAddContact(e) {
    e.preventDefault();
    setClick(true);
  }

  function handleSearchFilter(filteredContacts, textSearch) {
    setFilter(
      filteredContacts.length > 0 ? filteredContacts : filteredContacts.length > 0 && textSearch === "" ? contacts : []
    );
  }

  return (
    <main className={styles.main}>
      <Navbar contacts={contacts} handleSearchFilter={handleSearchFilter} />
      <div className={styles.container}>
        <div className={styles.center}>
          <h3>Welcome</h3>
        </div>
      </div>
      <div className={styles.cardOwner}>
        <Card
          id={contacts[0].id}
          name={contacts[0].name}
          phone={contacts[0].phone}
          click={click}
          contacts={contacts}
          setContacts={setContacts}
          setFilter={setFilter}
          setClick={setClick}
        />
      </div>

      {contacts.length === 1 ? (
        <Empty
          contacts={contacts}
          setFilter={setFilter}
          setContacts={setContacts}
          click={click}
          setClick={setClick}
        />
      ) : (
        <>
          <button className={styles.button} onClick={handleAddContact}>
            Add new Contact
          </button>
          {click ? (
            <AddContact
              contacts={contacts}
              setFilter={setFilter}
              setContacts={setContacts}
              setClick={setClick}
            />
          ) : (
            <></>
          )}
          <ul>
            {filter.map((contact) => (
              <Card
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
                click={click}
                setClick={setClick}
                contacts={contacts}
                setFilter={setFilter}
                setContacts={setContacts}
              />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default App;
