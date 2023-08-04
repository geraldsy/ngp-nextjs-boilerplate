// types.ts
export interface Agency {
  name: string
  Status: string
  ContactNumber: string
  Email: string
  isActive: boolean
}

export interface User {
  name: string
  email: string
  contactnumber: string
  role: string
  datecreated: string
  isActive: boolean
}

export interface ListProps<T> {
  data: T[]
}
