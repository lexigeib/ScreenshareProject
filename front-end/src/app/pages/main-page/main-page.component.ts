import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private http: HttpClient) {
   }

  /* 
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
Main Screenshare Component 
Some Functions have been pre-built as a tip,
you can use more or less or rewrite the whole thing! 
The freedom is yours! 
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
*/
  @ViewChild('video') video: ElementRef;
  @ViewChild("canvas") canvasRef: ElementRef;
  get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement
  }

  isScreenSharing: boolean = false;
  screenshotTaken: boolean = false;
  uploadComplete: boolean = false;
  downloadUrl: string = "";
  baseUrl: string = 'http://localhost:4200';




  ngOnInit(): void {
  }

  captureScreenshot() {
    let context = this.canvas.getContext('2d');
    context.drawImage(this.video.nativeElement, 0, 0, this.canvas.width, this.canvas.height);
    this.screenshotTaken = true;
    this.isScreenSharing = false;
    this.video.nativeElement.srcObject = null;
  }

  download() { 
    saveAs(this.downloadUrl, 'screenshareChallenge.png');
  }

  upload() {
    const storage = getStorage();
    const id = Math.random().toString(36).substring(2);
    const storageRef = ref(storage, `image${id}`);
    const metadata = {
      contentType: 'image/jpeg',
    };
    uploadString(storageRef, this.canvas.toDataURL("image/png"), 'data_url', metadata).then((snapshot) => {
      const response = this.http.request('get', this.baseUrl)
      getDownloadURL(ref(storage, `image${id}`)).then((url) => {
        this.downloadUrl = url
      })
      this.uploadComplete = true;
    });
  }

  async shareScreen() {
    this.uploadComplete = false;
    this.screenshotTaken = false;
    this.downloadUrl = "";
    try {
      // @ts-ignore
      this.video.nativeElement.srcObject = await navigator.mediaDevices.getDisplayMedia({ video: true });
      this.isScreenSharing = true;
    } catch (err) {
      console.error("Error: " + err);
    }
  }
}
