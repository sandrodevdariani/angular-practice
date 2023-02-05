import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
    name: string = 'Clean Code';
    author: string = 'Robet C Martin';
    src: string = 'https://books.google.ge/books/publisher/content?id=hjEFCAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71OIJ9ugc8XDAzAXfGQYegLccsyn4NliMVk4iPAYPHMB5O_wHPL8YxLvIL64YrVkNHxFBGPwp9O44Yi0zGozHoInTSBxdI7XGzGgkUDlTG8imQC7zHiJHQQAzpKtPEorxZRoKRJ'


    name2: string = "Book2";
    author2: string = "author2";
    src2: string = 'https://books.google.ge/books/publisher/content?id=hjEFCAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71OIJ9ugc8XDAzAXfGQYegLccsyn4NliMVk4iPAYPHMB5O_wHPL8YxLvIL64YrVkNHxFBGPwp9O44Yi0zGozHoInTSBxdI7XGzGgkUDlTG8imQC7zHiJHQQAzpKtPEorxZRoKRJ'
    


    isDisabled: boolean = false

    handleClick() {

      this.isDisabled = true;

    }
  }
