import { configure, observable, action, runInAction } from 'mobx';
import { searchBooks } from '../webUtils/webUtils';

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
    try {
      this.state = 'pending';
      const result = await searchBooks(this.term);

      runInAction(() => {
        this.totalCount = result.length;
        this.results = result.items;
        this.state = 'completed';
      });
    } catch(e) {
      runInAction(() => {
        this.state = 'failed';
        console.log(e);
      })
    }
  }
}

const store = new BookSearchStore();
export default store;