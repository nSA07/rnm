import { setHistory } from "../features/history/historySlice";

const setDataHistory = (options, dispatch, history) => {
    if(!history.length) {
        dispatch(setHistory([options]))
    } else {
        const templateOptions = [...history]
        templateOptions.push(options)
        dispatch(setHistory(templateOptions))
    }

}
export default setDataHistory