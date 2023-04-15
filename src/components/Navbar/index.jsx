import { BsSearch } from "react-icons/bs";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar(props) {
  const { contacts } = props;
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
    e.preventDefault();
    const filteredContacts = contacts.slice(1).filter(
        (contact) =>
          contact.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          contact.phone.toLowerCase().includes(e.target.value.toLowerCase())
      );
    props.handleSearchFilter(filteredContacts, search);
  }

  return (
    <div id="main-menu-toggle">
      <div className={styles.navbar}>
        <h1 className={styles.title}>MyContact</h1>

        <div className={styles.group}>
          <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
            <BsSearch cursor="pointer" size={20} />
          </svg>
          <input
            placeholder="Search"
            type="search"
            className={styles.input}
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
