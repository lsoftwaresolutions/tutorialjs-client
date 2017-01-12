import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserService } from '../../../core/services/user';
import { ChatService } from '../../../core/services/chat';


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'chat'
  selector: 'chat',  // <chat></chat>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    UserService,
    ChatService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './chat.style.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './chat.template.pug'
})

export class ChatComponent implements OnInit {
  public user: IUser;
  public chat: IChat[];
  public data: IChat = {
    message: ''
  };
  public froalaOptions: any = {
    height: 100,
    // tslint:disable-next-line:max-line-length
    toolbarButtons: [ 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'color', 'emoticons', '|', 'paragraphFormat', 'quote', 'insertHR', '|', 'insertLink', 'insertImage', 'insertVideo', 'insertFile' ]
  };

  constructor(
    private toastr: ToastsManager,
    private userService: UserService,
    private chatService: ChatService
  ) {
    console.log('hello `Chat` component');
    userService.current()
      .$observable
      .subscribe(
        (user: IUser) => this.user = user
      );
    this.load();
  }

  ngOnInit(): void { }

  public onFroalaModelChanged(event: any) {
    setTimeout(() => {
      this.data.message = event;
    });
  }

  public save() {
    // if (this.data.id) {
    //   this.chatService.update(this.data)
    //     .$observable
    //     .subscribe(
    //       () => {
    //         Object.assign(data, message) && this.order(this.message)
    //       },
    //       (error: any) => {
    //         let message: string = 'Something went wrong...';
    //         if (error && error.message) {
    //           message = error.message;
    //         }
    //         this.toastr.error(message, 'Oops!');
    //       }
    //     );
    // }
    // else {
    this.chatService.save(this.data)
      .$observable
      .subscribe(
        (message: IChat) => {
          // this.chat.push(message);
          // this.order(this.chat);
          this.load();
        },
        (error: any) => {
          let message: string = 'Something went wrong...';
          if (error && error.message) {
            message = error.message;
          }
          this.toastr.error(message, 'Oops!');
        }
      );
    // }
  }

  private load() {
    this.chatService.query()
      .$observable
      .subscribe(
        (chat: IChat[]) => this.chat = this.order(chat)
      );
  }

  private order(courses: IChat[]): IChat[] {
    return courses.sort((lhs: IChat, rhs: IChat) => Number(rhs.createdAt) - Number(lhs.createdAt));
  }
}
