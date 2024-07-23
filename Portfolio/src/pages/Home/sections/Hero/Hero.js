


import Typed from "typed.js";

const initTyped = () => {
  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Backend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });

  return typed;

  
};

export default initTyped;


