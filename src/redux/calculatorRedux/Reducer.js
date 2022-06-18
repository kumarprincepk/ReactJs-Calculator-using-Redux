import {LOAD_ANSWER, LOAD_BUTTONS, LOAD_CLEAR, LOAD_BACKSPACE,LOAD_SIN, LOAD_COS, LOAD_TAN, LOAD_LOG} from './ActionTypes'

export const CALCULATOR_KEY = 'calculatorStore'

let initialState ={
    number:'',
    ans:'',
  
}
   



export const calculatorReducer = (state = initialState, action) =>{
    let {type, payload} = action
    
     switch(type){
        case LOAD_BUTTONS:
            return{
                ...state,
                ...payload,
                number:state.number.concat(action.payload)
           
                
            }

            case LOAD_ANSWER:
               return{
                   ...state,
                   ...payload,
                   ans:eval(state.number).toString()
               }

               case LOAD_CLEAR:
                return{
                    ...state,
                    ...payload,
                    number:'',
                    ans:''
                }

                case LOAD_BACKSPACE:
                    return{
                        ...state,
                        ...payload,
                        number:(state.number).slice(0,-1),
                        ans:''
                    }
                
                case LOAD_SIN:
                    return{
                        ...state,
                        ...payload,
                        ans:(Math.sin(parseInt(state.number.substring(3,state.number.length)))).toString()

                    }

                case LOAD_COS:
                    return{
                         ...state,
                         ...payload,
                         ans:(Math.cos(parseInt(state.number.substring(3,state.number.length)))).toString()
    
                        }
                
                case LOAD_TAN:
                    return{
                        ...state,
                        ...payload,
                        ans:(Math.tan(parseInt(state.number.substring(3,state.number.length)))).toString() 
                        }
                
                case LOAD_LOG:
                    return{
                        ...state,
                        ...payload,
                        ans:(Math.log(parseInt(state.number.substring(3,state.number.length)))).toString() 
                        }
                default: return state
    }


}