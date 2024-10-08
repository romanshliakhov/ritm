// ----------------------------------------------------
export const removeCustomClass = (item, customClass = 'active') => {
  item.classList.remove(customClass);
}
// ----------------------------------------------------
export const toggleCustomClass = (item, customClass = 'active') => {
  item.classList.toggle(customClass);
}
// ----------------------------------------------------
export const addCustomClass = (item, customClass = 'active') => {
  item.classList.add(customClass);
}
// ----------------------------------------------------
export const removeClassInArray = (arr, customClass = 'active') => {
  arr.forEach((item) => {
    item.classList.remove(customClass);
  });
}
// ----------------------------------------------------
export const addClassInArray = (arr, customClass = 'active') => {
  arr.forEach((item) => {
    item.classList.add(customClass);
  });
}
// ----------------------------------------------------
export const toggleClassInArray = (arr, customClass = 'active') => {
  arr.forEach((item) => {
    item.classList.toggle(customClass);
  });
}

export const elementHeight = (el, variableName) => {
  // el -- сам елемент (но не коллекция)
  // variableName -- строка, имя создаваемой переменной
  if(el) {
    function initListener(){
      const elementHeight = el.offsetHeight;
      document.querySelector(':root').style.setProperty(`--${variableName}`, `${elementHeight}px`);
    }
    window.addEventListener('DOMContentLoaded', initListener)
    window.addEventListener('resize', initListener)
  }
}

// ----------------------------------------------------

export const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || 'block';
	el.style.transition = `all ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
};
// ----------------------------------------------------
export const fadeOut = (el, timeout) => {
	el.style.opacity = 1;
	el.style.transition = `all ${timeout}ms ease`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = 'none';
	}, timeout);
};
