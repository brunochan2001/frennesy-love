import { useState } from "react";
import "./App.css";

interface Photo {
  src: string;
  text: string;
  rotate: string;
}

const photos: Photo[] = [
  { src: "/fotos/foto1.jpeg", text: "Un momento especial", rotate: "-8deg" },
  { src: "/fotos/foto2.jpeg", text: "Contigo ❤️", rotate: "6deg" },
  { src: "/fotos/foto3.jpeg", text: "Qué bonito coincidir", rotate: "-5deg" },
  { src: "/fotos/foto4.jpeg", text: "Mi sonrisa favorita", rotate: "8deg" },
  { src: "/fotos/foto5.jpeg", text: "Pequeños recuerdos", rotate: "-6deg" },
  { src: "/fotos/foto6.jpeg", text: "Y los que faltan...", rotate: "5deg" },
];

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);

  const moveNoButton = () => {
    const maxX = window.innerWidth - 110;
    const maxY = window.innerHeight - 65;

    setNoPosition({
      left: Math.max(10, Math.random() * maxX),
      top: Math.max(10, Math.random() * maxY),
    });
  };

  return (
    <main className="page">
      <div className="background-hearts">♡</div>

      {!accepted ? (
        <section className="content">
          <span className="eyebrow">UNA PREGUNTA ESPECIAL ✨</span>

          <h1>
            Tengo algo
            <br />
            que preguntarte...
          </h1>

          <p className="subtitle">
            Hay momentos que se vuelven especiales simplemente porque los
            compartimos.
          </p>

          <div className="photo-collage">
            {photos.map((photo, index) => (
              <div
                className={`photo photo-${index + 1}`}
                key={photo.src}
                style={{ "--rotation": photo.rotate }}
              >
                <img src={photo.src} alt={photo.text} />
                <span>{photo.text}</span>
              </div>
            ))}
          </div>

          <div className="question-section">
            <span className="little-heart">♥</span>

            <h2>¿Quieres estar conmigo?</h2>

            <p>Me haría mucha ilusión comenzar esta historia contigo.</p>

            <div className="buttons">
              <button className="yes-button" onClick={() => setAccepted(true)}>
                ¡SÍ, QUIERO! ❤️
              </button>

              <button
                className="no-button"
                style={
                  noPosition
                    ? {
                        position: "fixed",
                        left: noPosition.left,
                        top: noPosition.top,
                      }
                    : {}
                }
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
              >
                No 🙈
              </button>
            </div>

            <span className="footer-note">
              Hecho con mucho cariño, para ti ♡
            </span>
          </div>
        </section>
      ) : (
        <section className="success-screen">
          <div className="success-heart">❤️</div>

          <span className="eyebrow">¡ESTO ES SOLO EL COMIENZO! ✨</span>

          <h1>¡Sabía que dirías que sí!</h1>

          <p>
            No sabes lo feliz que me hace este momento.
            <br />
            Quiero compartir contigo muchos momentos, risas, aventuras y
            recuerdos inolvidables.
          </p>

          <h2>¡Ahora comienza nuestra historia! 💗</h2>

          <div className="floating-hearts">
            {["💕", "💗", "💖", "❤️", "💘"].map((heart, i) => (
              <span key={i} style={{ "--i": i }}>
                {heart}
              </span>
            ))}
          </div>

          <span className="footer-note">Con mucho cariño, para ti. ♡</span>
        </section>
      )}
    </main>
  );
}
