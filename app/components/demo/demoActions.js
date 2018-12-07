/*global setTimeout*/
export const DEMO_LOAD = 'DEMO_LOAD';

export let loadData = () => {
    return (dispatch) => {
        // we are loading data by timeout.
        // you can load data via ajax call. Axios is the libarary to use.
        setTimeout(() => {
            dispatch({
                type: DEMO_LOAD,
                data: 'Loaded from reducer'
            });
        }, 10);
    };
};
