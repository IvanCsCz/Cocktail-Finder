import { z } from 'zod'
import { CategoriesAPIResponseSchema, DrinksAPIResponse, SearchFiltersSchema } from '../schemas/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilters = z.infer<typeof SearchFiltersSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>