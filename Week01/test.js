let sum = 0;
for (let i = 0; i < 1000000000000; i++) {
  sum = sum + i;
}
// The default refresh rate for htop is set to 15 (1.5sec), and the default for top is 1sec. So it's mostly to do with the data refresh. You could configure these by creating an rc file in ~/.config/htop/htoprc and have delay to whatever number you want
