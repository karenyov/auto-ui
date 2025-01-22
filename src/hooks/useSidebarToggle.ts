import { useEffect, useState } from "react";

const useSidebarToggle = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);	
    useEffect(() => {
      const savedToggle = localStorage.getItem("sb|sidebar-toggle") === "true" ? true : false;

      if (savedToggle) {
        document.body.classList.add('sb-sidenav-toggled');
      } else {
        document.body.classList.remove('sb-sidenav-toggled');
      }

        setIsToggled(savedToggle);
    }, [isToggled]);
  
   const toggle = () => {
    const newIsToggle = isToggled? "false" : "true";    
    localStorage.setItem("sb|sidebar-toggle", newIsToggle);
    setIsToggled(newIsToggle === "true");

    if (newIsToggle === "true") {
      document.body.classList.add('sb-sidenav-toggled');
    }  else {
      document.body.classList.remove('sb-sidenav-toggled');
    }
  };

  return { isToggled, toggle };
} 

export default useSidebarToggle;
