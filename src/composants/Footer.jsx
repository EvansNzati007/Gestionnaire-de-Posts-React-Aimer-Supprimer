import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Développé avec ❤️ par <strong>NZATI DOUMBI Evans</strong>
      </p>
      <p>
        &copy; {new Date().getFullYear()} Tous droits réservés.
      </p>
    </footer>
  );
}
