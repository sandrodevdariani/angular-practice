import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }


  getBooks() {
    return [
      {
        name:   'Book',
        author:   'author',
        image:   'https://books.google.ge/books/publisher/content?id=hjEFCAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71OIJ9ugc8XDAzAXfGQYegLccsyn4NliMVk4iPAYPHMB5O_wHPL8YxLvIL64YrVkNHxFBGPwp9O44Yi0zGozHoInTSBxdI7XGzGgkUDlTG8imQC7zHiJHQQAzpKtPEorxZRoKRJ',
        amount: 80
      },
  
      {
        name:   "Book1",
        author:   "author1",
        image:   'https://books.google.ge/books/publisher/content?id=hjEFCAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71OIJ9ugc8XDAzAXfGQYegLccsyn4NliMVk4iPAYPHMB5O_wHPL8YxLvIL64YrVkNHxFBGPwp9O44Yi0zGozHoInTSBxdI7XGzGgkUDlTG8imQC7zHiJHQQAzpKtPEorxZRoKRJ',
        amount: 90
      },
  
      {
        name:   "Book2",
        author:   "author2",
        image:   'https://books.google.ge/books/publisher/content?id=hjEFCAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71OIJ9ugc8XDAzAXfGQYegLccsyn4NliMVk4iPAYPHMB5O_wHPL8YxLvIL64YrVkNHxFBGPwp9O44Yi0zGozHoInTSBxdI7XGzGgkUDlTG8imQC7zHiJHQQAzpKtPEorxZRoKRJ',
        amount: 100
      },
  
      {
        name:   "Book3",
        author:   "author3",
        image:   'https://books.google.ge/books/publisher/content?id=hjEFCAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71OIJ9ugc8XDAzAXfGQYegLccsyn4NliMVk4iPAYPHMB5O_wHPL8YxLvIL64YrVkNHxFBGPwp9O44Yi0zGozHoInTSBxdI7XGzGgkUDlTG8imQC7zHiJHQQAzpKtPEorxZRoKRJ',
        amount: 120
      },
  
      {
        name:   "Book4",
        author:   "author4",
        image:   'https://books.google.ge/books/publisher/content?id=hjEFCAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71OIJ9ugc8XDAzAXfGQYegLccsyn4NliMVk4iPAYPHMB5O_wHPL8YxLvIL64YrVkNHxFBGPwp9O44Yi0zGozHoInTSBxdI7XGzGgkUDlTG8imQC7zHiJHQQAzpKtPEorxZRoKRJ',
        amount: 130
      }
    ]
  }



}
