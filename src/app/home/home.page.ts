import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastOptions } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  clickMe() {
    alert("Thanks!");
  }
  
  toastOptions: ToastOptions;
  toastMessage: string;

  constructor(private toast: ToastController) {}

  showToast() {
    this.toastOptions = {
      message: this.toastMessage,
      showCloseButton: true,
      closeButtonText: "CLOSE TOAST",
      position: "top"
    }
    
  }
  }
