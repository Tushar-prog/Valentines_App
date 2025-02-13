import { Component, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-valentine-component',
  imports: [CommonModule],
  templateUrl: './valentine-component.component.html',
  styleUrls: ['./valentine-component.component.css'],
  encapsulation: ViewEncapsulation.None //to be removed
})
export class ValentineComponentComponent {

  @ViewChild('noButton') noButtonRef!: ElementRef<HTMLButtonElement>;
  @ViewChild('yesButton') yesButtonRef!: ElementRef<HTMLButtonElement>;
  yesButtonSize = 20; // Initial font size for Yes button
  noButtonSize = 20; // Initial font size for No button
  yesPadding = 10; // Initial padding for Yes button
  noPadding = 10; // Initial padding for No button
  noClickCount  = 0;
  showNoButton = true;
  showYesButton = true;
  showQuestion = true;
  noText = "No"; // Default text for No button
  Question = "Hi Miss Pranali Mane, will you please be my valentine? 🥺👉👈";

  gifUrls = [
    "assets/gifs/heppi.gif",  
    "assets/gifs/please.gif",
    "assets/gifs/sad_baby.gif",
    "assets/gifs/sadge.gif",
    "assets/gifs/celebrate.gif",
  ];

  currentGif = this.gifUrls[0]; // Default GIF

  onNoClick() {

    const cheesyTexts = [
      "Are you sure? 😢",
      "Think again! 🥺",
      "Really? 💔",
      "You’re breaking my heart! 😭",
      "Last chance! 😏",
      "No isn't an option anymore! 😈",
    ];

    this.noText = cheesyTexts[this.noClickCount % cheesyTexts.length]; 
    this.noClickCount++;

    // Update GIF based on "No" clicks
    if (this.noClickCount < this.gifUrls.length - 1) {
      this.currentGif = this.gifUrls[this.noClickCount];
    }

    // Shrink "No" button
    if (this.noButtonSize > 15) {
      this.noButtonSize -= 2;
      this.noPadding -= 1;
    }
    // Grow "Yes" button
    this.yesButtonSize += 10;  // Increased growth rate
    this.yesPadding += 3;

    if (this.noClickCount >= cheesyTexts.length) {
      this.enableRunAway();
    }
  }
  
  enableRunAway() {
    if (!this.noButtonRef || !this.noButtonRef.nativeElement) {
      console.error('No button reference not initialized!');
      return;
    }

    const noButton = this.noButtonRef.nativeElement;
    const yesButton = this.yesButtonRef?.nativeElement; // Optional chaining in case yesButton is not found

    noButton.style.position = 'absolute';
    noButton.style.transition = 'top 0.5s, left 0.5s';
    noButton.style.left = '50px';  // You can adjust this value to your preference
    noButton.style.top = '200px';   // You can adjust this value to your preference
    

    noButton.addEventListener('mouseenter', () => {
      const maxWidth = window.innerWidth - 200; 
      const maxHeight = window.innerHeight - 100;
      let newX, newY, overlap;

      if (yesButton) {
        const yesRect = yesButton.getBoundingClientRect();

        do {
          newX = Math.random() * maxWidth;
          newY = Math.random() * maxHeight;
          
          const noWidth = noButton.offsetWidth;
          const noHeight = noButton.offsetHeight;

          // Check for overlap
          overlap = !(
            newX + noWidth < yesRect.left ||  // No is to the left of Yes
            newX > yesRect.right ||          // No is to the right of Yes
            newY + noHeight < yesRect.top || // No is above Yes
            newY > yesRect.bottom            // No is below Yes
          );

        } while (overlap); // Keep generating new positions until there's no overlap
      } else {
        newX = Math.random() * maxWidth;
        newY = Math.random() * maxHeight;
      }

      noButton.style.left = `${newX}px`;
      noButton.style.top = `${newY}px`;
    });
  }

  setupRunAwayEffect() {
    this.enableRunAway(); 
  }

  onYesClick() { 
    this.currentGif = this.gifUrls[this.gifUrls.length - 1];
    this.showNoButton = false;
    this.showYesButton = false;
    this.Question = "Yay! You said Yes! 🎉";
    this.triggerConfetti();
    //alert("Yay! You said Yes! 🎉");
  }

  triggerConfetti() {
    const duration = 3000; // Confetti lasts 3 seconds
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
        if (Date.now() > animationEnd) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 80,
            origin: { x: Math.random(), y: Math.random() - 0.2 }, // Random positions
            colors: ['#ff0000', '#ff1493', '#ffd700', '#ffffff', '#800080'],
        });
    }, 200); // Burst every 200ms
  }

  constructor(private router: Router) {} // Inject Router
  goToNextComponent(){
    this.router.navigate(['/yes']);
  }
}