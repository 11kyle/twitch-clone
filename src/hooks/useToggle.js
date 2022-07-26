import { useCallback, useState } from 'react';

// Toggle boolean value - default "true" value
export const useToggle = (initialState = true) => {
    // Initialize state
    const [state, setState] = useState(initialState);

    // This function changes the boolean value to it's opposite value
    const toggle = useCallback(() => setState(state => !state), []);

    return [state, toggle];
};