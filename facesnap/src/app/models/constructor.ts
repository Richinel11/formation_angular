export class facesnap{
title: string;
description: string;
imageUrl: string;
createdDate: Date;
snap: number;
constructor(title: string , description: string, imageUrl: string, createdDate: Date, snap: number) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.snap = snap;
  }
}