This is how you do animation

```css
p {
  animation: pointDown 1000ms infinite;
}

/* tag {
  animation: animationName duration repeat(mostly used is repeat)
  } 
*/

@keyframes pointDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(16px);
  }
  100% {
    transform: translateY(0);
  }
}

/* 
@keyframes animationName {
    means the starting position
    0% { 
      transform: translateY(0);
    }
    means the half duration position
    50% {
      transform: translateY(16px);
    }
    means the ending position
    100% {
      transform: translateY(0);
    }
}
*/
```
