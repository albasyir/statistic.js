class State {
    constructor(newState = []) {
        this.setState(newState)
    }

    getState() {
        return this.states
    }

    setState(newState) {
        this.states = newState
        this.setTypeData()
    }

    setTypeData() {
        this.states
    }

    getTypeData() {
        return this.typeData
    }

    pushState(newState) {
        this.states.push(...newState);
    }

    popStateBetween(minState, maxState, rule = null) {
        rule = rule || ((x) => {
            return x >= minState && x <= maxState
        });

        this.states = this.states.filter(rule);

        return this.states;
    }

    sortState() {
        // this.state.sort((a, b) => a.localeCompare(b))
        this.states = this.states.sort((a, b) => (a - b));
    }

    reverseState() {
        this.states = this.states.reverse();
    }
}

export default State;