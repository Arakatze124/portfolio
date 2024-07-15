import React from "react";
import "../styles/footer.css";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div>Dean Opara</div>
      <div>
        Fehler gefunden? oder Verbesserungsvorschlag?<br></br> Dann melde dich
        bei{" "}
        <Link className="white" href={"/contact"}>
          mir
        </Link>
      </div>
      <div>
        <Link className="white" href={"/patchNotes"}>
          Version: 3.1
        </Link>
      </div>

    </footer>
  );
}
