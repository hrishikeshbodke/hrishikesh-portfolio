import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('600ms ease-in', style({ opacity: 1 }))
  ])
]);

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeInDown = trigger('fadeInDown', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-50px)' }),
    animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

export const staggerFadeIn = trigger('staggerFadeIn', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(80, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(-20px)' }),
      stagger(60, [
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const progressAnimation = trigger('progressAnimation', [
  transition(':enter', [
    style({ width: '0%' }),
    animate('1200ms ease-out')
  ])
]);

export const bounceIn = trigger('bounceIn', [
  transition(':enter', [
    animate('800ms ease-out', keyframes([
      style({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
      style({ opacity: 1, transform: 'scale(1.05)', offset: 0.5 }),
      style({ transform: 'scale(0.95)', offset: 0.7 }),
      style({ transform: 'scale(1)', offset: 1 })
    ]))
  ])
]);

export const rotateIn = trigger('rotateIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'rotate(-180deg)' }),
    animate('700ms ease-out', style({ opacity: 1, transform: 'rotate(0)' }))
  ])
]);
