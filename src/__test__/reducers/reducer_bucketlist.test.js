import reducer, { initialState } from '../../reducers/reducer_bucketlist';

describe('Bucketlist reducers', () => {
  it('it updates state on get_bucketlists_SUCCESS', () => {
    expect(reducer(initialState, {
      type: 'get_bucketlists_SUCCESS',
      payload: {
        data: {
          items: [{ 1: { name: 'Before 40', description: '' } }],
          current_page: 1,
          next_page: null,
          prev_page: null,
          pages: 1
        }
      }
    })).toEqual({
      ...initialState,
      items: { undefined: { 1: { name: 'Before 40', description: '' } } },
      totalpages: 1,
      currentpage: 1,
      nextpage: null,
      prevpage: null
    });
  });
  it('it updates state on delete_bucketlist_SUCCESS', () => {
    expect(reducer(initialState, {
      type: 'delete_bucketlist_SUCCESS',
      payload: { data: { bucketlist: 1, status: 'Success', user: 1 } }
    })).toEqual({
      ...initialState
    });
  });
  it('it updateds state on get_bucketlist_SUCCESS', () => {
    expect(reducer(initialState, {
      type: 'get_bucketlist_SUCCESS',
      payload: {
        data: {
          id: 1,
          name: 'Before 40',
          description: '',
          owner: 1,
          items: {}
        }
      }
    })).toEqual({
      ...initialState,
      1: {
        id: 1,
        name: 'Before 40',
        description: '',
        owner: 1,
        items: {}
      },
      current: {
        id: 1,
        name: 'Before 40',
        description: '',
        owner: 1,
        items: {}
      }
    });
  });
  it('returns state on delete_bucketlist_item_SUCCESS', () => {
    expect(reducer(initialState, {
      type: 'delete_bucketlist_item_SUCCESS',
    })).toEqual({ ...initialState });
  });
});
