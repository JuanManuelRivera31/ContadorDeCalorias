import { Activity } from '../types'

export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity}}   //Type que describe lo que pasa en el reducer de abajo
//Payload: datos que se van a agregar al state - Genera un nuevo objeto de tipo activity

type ActivityState = { //Type que describe el estado inicial
    activities: Activity[]
}
export const initialState : ActivityState = {
    activities: []
}

export const activityReducer = (//Reducer es el que conecta a ambos
        state: ActivityState = initialState,
        action: ActivityActions
    ) => { 
    if(action.type === 'save-activity') {
        //Este codigo maneja la lógica para actualizar el state
        console.log('Guardando actividad', action.payload.newActivity)
        return {
            ...state, //Tomar una copia del estado actual
            activities: [...state.activities, action.payload.newActivity]
        //(1. Para no perder las actividades anteriores 2. Agregar la nueva actividad)  
        }
    }
    return state
}   