import contactsReducer from './contacts/slice'
import filtersReducer from "./filters/slice"
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filters: filtersReducer,
	},
})


