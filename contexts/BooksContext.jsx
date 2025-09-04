import { createContext, useState } from "react"
import { useUser } from "../hooks/useUser"
import { ID, Permission, Role } from "react-native-appwrite"
import { databases } from "../lib/appwrite"


const DATABASE_ID = "68b10c9a001e94cbf419"
const COLLECTION_ID = "68b10e25002b39d4ae02"

export const BooksContext = createContext()

export function BooksProvider({children}) {
  const [books, setBooks] = useState([])
  const { user} = useUser()

  async function fetchBooks() {
    try {


    } catch (error) {
      console.error(error.message)
    }
  }

  async function fetchBookById(id) {
    try {
      return response 
    } catch (error) {
      console.log(error.message)
    }
  }

  async function createBook(data) {
    try {
     const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
        Permission.read(Role.user(user.$id)),
        Permission.update(Role.user(user.$id)),
        Permission.delete(Role.user(user.$id))
        ]
      )
    } catch (error) {
      console.log(error.message)
    }
  }

  async function deleteBook(id) {
    try {
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <BooksContext.Provider 
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  )
}