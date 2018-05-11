import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.scss']
})
export class MailPreviewComponent implements OnInit {

  mail;
  constructor() { }

  ngOnInit() {
  }

  showMail(mail) {
    this.mail = mail;
  }

}
