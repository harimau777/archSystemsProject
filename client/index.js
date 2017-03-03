$(document).ready(() => {
    const accordionTabs = $('accordionTab');

    _.each(accordionTabs, (tab) => tab.click(toggleAccordion));

    function toggleAccordion(event) {
      console.log(event);
      // event.___.removeClass('hiddenTab');
      // event.___.siblings.addClass('hiddenTab');
      // _.each(accordionTabs, (tab) => tab.attr('id') = event.___ ? tab.removeClass('hiddenTab') : tab.addClass('hiddenTab'));
    }
  }
)