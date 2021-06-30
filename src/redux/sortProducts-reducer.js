const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_PAGE_SIZE = 'CHANGE_PAGE_SIZE';
const CHANGE_SORT_STATUS = 'CHANGE_SORT_STATUS';

const initialState = {
    pageControls : {
        pageSizes : [4, 8, 16],
        sortItems : [
            { name : 'NewestArrivals', value : 'NEW' },
            { name : 'Price High To Low', value : 'H/L' },
            { name : 'Price Low To High', value : 'L/H' }
        ],
        currentPageSize : 8,
        currentPage : 1,
        currentSortStatus : 'NEW'
    }
};

const sortProductsReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case CHANGE_PAGE:
            return {
                ...state,
                pageControls : {
                    ...state.pageControls,
                    currentPage : action.currentPage
                }
            };
        case CHANGE_PAGE_SIZE:
            return {
                ...state,
                pageControls : {
                    ...state.pageControls,
                    currentPageSize : action.currentPageSize,
                    currentPage : 1
                }
            };
        case CHANGE_SORT_STATUS:
            return {
                ...state,
                pageControls : {
                    ...state.pageControls,
                    currentSortStatus : action.currentSortStatus
                }
            };
        default:
            return state;
    }
};

const changePageSizeAC = currentPageSize => ({ type : CHANGE_PAGE_SIZE, currentPageSize });
const changePageAC = currentPage => ({ type : CHANGE_PAGE, currentPage });
const changeSortAC = currentSortStatus => ({ type : CHANGE_SORT_STATUS, currentSortStatus });

export const changePageSize = currentPageSize => dispatch => {
    dispatch( changePageSizeAC( currentPageSize ) );
};

export const changePage = currentPage => dispatch => {
    dispatch( changePageAC( currentPage ) );
};

export const changeSort = sortStatus => dispatch => {
    dispatch( changeSortAC( sortStatus ) );
};

export default sortProductsReducer;

