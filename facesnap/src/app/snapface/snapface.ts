import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-snapface',
  imports: [],
  templateUrl: './snapface.html',
  styleUrl: './snapface.scss'
})
export class Snapface implements OnInit {
  title!: string;
  description!: string;
  imageUrl!: string;
  createdAt!: Date;
  snaps!: number;

ngOnInit() {
  this.title = 'Archibald';
  this.description = 'Mon meilleur ami depuis toujours !';
  this.imageUrl = 'https://example.com/archibald.jpg';
  this.createdAt = new Date();
  this.snaps = 5;
}
}
