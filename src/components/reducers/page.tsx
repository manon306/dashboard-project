export default function reducer(currentState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...currentState,
                tasks: [...currentState.tasks, action.payload],
                input: '' // Clear input after adding task
            };

        case 'DELETE_TASK':
            const newTasks = [...currentState.tasks];
            newTasks.splice(action.payload, 1);
            return {
                ...currentState,
                tasks: newTasks
            };

        case 'SET_INPUT':
            return {
                ...currentState,
                input: action.payload
            };
        case 'get':
            // Retrieve tasks from localStorage if available
            const storedTasks = localStorage.getItem('tasks');
            return {
                ...currentState,
                tasks: storedTasks ? JSON.parse(storedTasks) : []
            };

        default:
            return currentState;
    }
}
