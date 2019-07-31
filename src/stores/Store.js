import { configure, observable, action, computed, autorun } from 'mobx';

configure({
  enforceActions: 'strict'
});

class BookSearchStore {
  @observable term = '';
  @observable state = '';
  @observable results = '';
  @observable totalCount = 0;

  @action.bound
  setSearchTerm(term) {
    this.term = term;
  }

  @action.bound
  async search() {
    // todo :::
  }
}

const store = new BookSearchStore();
export default store;