//acitons do Usuario
export default {
    counterUp({ state, commit }){
        commit('setCounter', state.counter + 1)
    }
};