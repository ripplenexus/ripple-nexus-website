
export const startAnimation = (elementsClass: string, newClassToAppend: string): number => {
    const listItems = document.querySelectorAll(elementsClass) as NodeListOf<HTMLElement>;
    const delay = 250;
    let elementCount = 0;

    listItems.forEach((item, index) => {
        item.classList.add(newClassToAppend);
        item.style.animationDelay = `${index * delay}ms`;
        elementCount++;
    });

    return delay * (elementCount - 1);
};

export const endAnimation = (elementsClass: string, ClassToDelete: string): void => {
    const listItems = document.querySelectorAll(elementsClass) as NodeListOf<HTMLElement>;
    listItems?.forEach((item, index) => {
        item.classList.remove(ClassToDelete);
    });
}

export const showElement = (elementsClass: string, displayType: string): void => {
    const listItems = document.querySelectorAll(elementsClass) as NodeListOf<HTMLElement>;
    listItems.forEach((item) => {
        item.style.display = displayType;
    });
}

export const hideElement = (elementsClass: string): void => {
    const listItems = document.querySelectorAll(elementsClass) as NodeListOf<HTMLElement>;
    listItems.forEach((item) => {
        item.style.display = 'none';
        // item.style.opacity = '1';
    });
}

export const createObserver = (callback:Function, options = { threshold: 0.1 }) => {
    return new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        callback(entry, observer);
      });
    }, options);
  };

  //create observer could hav 2 parameters as callback function and threshold value
//here callback is the function which would have two parameters, entry and observer!
// entry is used for checking intersection like entry.isIntersecting
//observer is generally used when you require a new element to observe or remove observing the element by using observer.unobserve(element)

const fadeInRight = (entry: IntersectionObserverEntry, observer: IntersectionObserver): void => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-left');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fade-in-left');
    }
  };

const fadeInLeft = (entry: IntersectionObserverEntry, observer: IntersectionObserver): void => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-right');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fade-in-right');
    }
  };

  const fadeInTop = (entry: IntersectionObserverEntry, observer: IntersectionObserver): void => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-top');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fade-in-top');
    }
  };
  
  const fadeInBottom = (entry: IntersectionObserverEntry, observer: IntersectionObserver): void => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-bottom');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fade-in-bottom');
    }
  };



export const RightObserver = createObserver(fadeInRight);
export const LeftObserver = createObserver(fadeInLeft);
export const TopObserver = createObserver(fadeInTop);
export const BottomObserver = createObserver(fadeInBottom);