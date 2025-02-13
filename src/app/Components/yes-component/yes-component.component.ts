import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yes-component',
  imports: [CommonModule],
  templateUrl: './yes-component.component.html',
  styleUrl: './yes-component.component.css'
})
export class YesComponentComponent {
    // Background image URL (replace with your own image path)
    backgroundImageUrl: string = 'assets/Collage.jpg';

    // Letter content to display
    letterContent: string = `My Cuto sa chotu sa baby,

    I can't find the perfect words to express how much you mean to me. You're my sunshine on the darkest days, my constant support, and the person I want to spend every moment with. You've brought so much joy and love into my life, and I feel so lucky to have you by my side.

    Every day with you feels like a beautiful adventure, and I can't wait to continue making memories together. Thank you for being the amazing person you are.And ofcrs, the background you seing is what i made it from canva 
    and i am not very good at that but you are amazing so obviously i am open for suggestions, 
    thankyou for making my life so colorful and beautiful. I love you more than words can say.
    With all my love,
    yours Tushiii`;
}
