
import BaseElement from './base.element';

// https://www.martinfowler.com/bliki/PageObject.html
//
// Represents a OrgQuicklookElement for making assertions against. This makes it
// easier to abstract some of the webdriver details from the UI component.

// TODO attach to class as static property
const selectors = {
  title: '.panel-row-is_clickable .panel-column a',
  spaceQuicklookRow: '.space-quicklook'
};

export default class OrgQuicklookElement extends BaseElement {
  title() {
    return this.element(selectors.title).getText();
  }

  isExpanded() {
    return !!this.rows().length;
  }

  rows() {
    // TODO this should return new SpaceQuicklookRowElements
    return this.elements(selectors.spaceQuicklookRow);
  }
}
