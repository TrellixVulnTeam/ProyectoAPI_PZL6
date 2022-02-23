import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  isOk: boolean | null;

  login = this.fb.group({
    isbn: ['', Validators.required],
    name: ['', Validators.required],
    pages: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
    this.isOk = null;
  }

  ngOnInit(): void {}
}
