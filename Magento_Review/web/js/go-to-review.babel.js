define([], function () {
  'use strict';

  return function (config, element) {
    element.addEventListener('click', changeActiveTab);

    function changeActiveTab() {
      const element = document.getElementById(config.reviewId);

      if (config.triggerClickSelector) {
        const clickSelector = document.querySelector(config.triggerClickSelector);

        if (clickSelector) {
          clickSelector.click();
        }
      }

      if (element) {
        const parentElement = findAncestor(element, 'tab__content');
        setActiveFormTab(parentElement, parentElement.dataset.content);
      }
    }

    function findAncestor(element, containClass) {
      while ((element = element.parentElement) && !element.classList.contains(containClass)) ;
      return element;
    }

    function setActiveFormTab(oneTab, searchingTab) {
      const tabButton = oneTab.parentElement.querySelector(`[data-tab=${searchingTab}]`)

      if (tabButton) {
        tabButton.click();
      }
    }
  };
});
