import { useEffect, useState } from "react";
import "./ModoNoche.css"


// Custom hook para manejar el tema
function useDarkMode() {
    // Obtener el tema del localStorage o usar el predeterminado
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
    // Cambiar el tema y guardarlo en el localStorage
    function toggleTheme() {
      if (theme === "light") {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  
    // Actualizar el atributo data-theme del body cuando cambie el tema
    useEffect(() => {
      document.body.setAttribute("data-theme", theme);
    }, [theme]);
  
    // Retornar el tema actual y la función para cambiarlo
    return [theme, toggleTheme];
  }
  
// Componente botón para cambiar el tema
function ThemeButton() {
    const [theme, toggleTheme] = useDarkMode();
  
    // Retornar el elemento botón con el evento onClick
    return (
      <button onClick={toggleTheme}>
        Modo {theme === "light" ? "noche" : "día"}
      </button>
    );
  }

export default ThemeButton;