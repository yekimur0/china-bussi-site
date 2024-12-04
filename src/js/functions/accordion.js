export const accordion = () => {
  const parent = document?.querySelector(".faq__items");

  parent?.addEventListener("click", (e) => {
    if (e.target.classList.contains("faq__item-toggler")) {
      openAccordion(e.target);
    }
    return;
  });

  function openAccordion(target) {
    let parent = target.closest(".faq__item");

    if (parent.classList.contains('faq__item--active')) {
      parent.classList.remove('faq__item--active');
      return;
    }

    const items = document.querySelectorAll('.faq__item');

    items.forEach((item) => {
      item.classList.remove('faq__item--active');
    })

    parent.classList.toggle("faq__item--active");
  }
};
